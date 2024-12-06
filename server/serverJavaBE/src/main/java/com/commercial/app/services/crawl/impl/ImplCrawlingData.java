package com.commercial.app.services.crawl.impl;

import com.commercial.app.domain.entites.Laptop;
import com.commercial.app.domain.entites.crawl.Container;
import com.commercial.app.domain.entites.crawl.Data;
import com.commercial.app.domain.entites.crawl.Product;
import com.commercial.app.repositories.BrandRepository;
import com.commercial.app.repositories.LaptopRepository;
import com.commercial.app.services.crawl.CrawlingData;
import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class ImplCrawlingData implements CrawlingData {

    private final RestTemplate restTemplate = new RestTemplate();
    private final LaptopRepository laptopRepository;
    private final BrandRepository brandRepository;

    @Override
    public String fetchDataFromUrl(int size) {
        String url = "https://api.cellphones.com.vn/v2/graphql/query";

        HttpHeaders headers = getHttpHeaders();
        String requestBody = buildRequestBody(size);
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);

            Gson gson = new Gson();
            String json = response.getBody();
            Container container = gson.fromJson(json, Container.class);
            Data data = container.getData();
            for (Product product : data.getProducts()) {
                Laptop laptop = getLaptop(product);  // Assuming you have a method to map Product to Phone
                laptopRepository.save(laptop);
            }
            brandRepository.createBrand();
            return "Done!";
        } catch (Exception e){
            System.out.println("Error: " + e.getMessage());

        }
        return "OK";
    }

    private static HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("accept", "application/json");
        headers.set("accept-language", "vi,en;q=0.9,en-US;q=0.8");
        headers.set("content-type", "application/json");
        headers.set("origin", "https://cellphones.com.vn");
        headers.set("priority", "u=1, i");
        headers.set("referer", "https://cellphones.com.vn/");
        headers.set("sec-ch-ua", "\"Microsoft Edge\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"");
        headers.set("sec-ch-ua-mobile", "?1");
        headers.set("sec-ch-ua-platform", "\"Android\"");
        headers.set("sec-fetch-dest", "empty");
        headers.set("sec-fetch-mode", "cors");
        headers.set("sec-fetch-site", "same-site");
        headers.set("user-agent", "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36 Edg/129.0.0.0");
        return headers;
    }
    private String buildRequestBody(int size) {
        return "{"
                + "\"query\":\"query GetProductsByCateId {"
                + "products("
                + "filter: {"
                + "static: {"
                + "categories: [\\\"380\\\"],"
                + "province_id: 30,"
                + "stock: { from: 0 },"
                + "filter_price: { from: 1 to: 194990000 }"
                + "}"
                + "},"
                + "size: "+ size + ","
                + "sort: [{view: desc}]"
                + ") {"
                + "general {"
                + "product_id "
                + "name "
                + "attributes "
                + "sku "
                + "doc_quyen "
                + "manufacturer "
                + "url_key "
                + "url_path "
                + "categories {"
                + "categoryId "
                + "name "
                + "uri "
                + "}"
                + "review {"
                + "total_count "
                + "average_rating "
                + "}"
                + "}"
                + "filterable {"
                + "is_installment "
                + "stock_available_id "
                + "company_stock_id "
                + "filter {"
                + "id "
                + "Label " // Corrected here
                + "}"
                + "is_parent "
                + "exclusive_prices "
                + "price "
                + "prices "
                + "special_price "
                + "promotion_information "
                + "thumbnail "
                + "promotion_pack "
                + "sticker "
                + "flash_sale_types "
                + "}"
                + "}"
                + "}\","
                + "\"variables\":{}"
                + "}";
    }

    private Laptop getLaptop(Product product) {
        Laptop laptop = new Laptop();
        laptop.setBattery(product.getGeneral().getAttributes().getBattery() == null? "Mặc định" : product.getGeneral().getAttributes().getBattery());
        laptop.setCpu(product.getGeneral().getAttributes().getCpu() == null? "Mặc định" :product.getGeneral().getAttributes().getCpu());
        laptop.setDescription(product.getGeneral().getAttributes().getNhu_cau_su_dung() == null? "Mặc định" : product.getGeneral().getAttributes().getNhu_cau_su_dung());
        laptop.setModel(product.getGeneral().getName() == null? "Mặc định" : product.getGeneral().getName());
        laptop.setManufacturer(product.getGeneral().getManufacturer() == null? "Mặc định" : product.getGeneral().getManufacturer());
        laptop.setPrice((int) product.getFilterable().getPrice());
        laptop.setRam(product.getGeneral().getAttributes().getLaptop_ram() == null? "Mặc định" : product.getGeneral().getAttributes().getLaptop_ram());
        laptop.setOs(product.getGeneral().getAttributes().getOs_version() == null? "Mặc định" : product.getGeneral().getAttributes().getOs_version());
        laptop.setResolution(product.getGeneral().getAttributes().getDisplay_resolution() == null? "Mặc định" : product.getGeneral().getAttributes().getDisplay_resolution());
        laptop.setScreenSize(product.getGeneral().getAttributes().getDisplay_size() == null? "Mặc định" : product.getGeneral().getAttributes().getDisplay_size());
        laptop.setVga(product.getGeneral().getAttributes().getVga() == null? "Mặc định" : product.getGeneral().getAttributes().getVga());
        laptop.setWeight(product.getGeneral().getAttributes().getProduct_weight() == null? "Mặc định" : product.getGeneral().getAttributes().getProduct_weight());
        laptop.setStockAvailable(product.getFilterable().getStock_available_id());
        laptop.setStorage(product.getGeneral().getAttributes().getO_cung_laptop() == null? "Mặc định" : product.getGeneral().getAttributes().getO_cung_laptop());
        laptop.setFrameRate(product.getGeneral().getAttributes().getLaptop_tan_so_quet() == null? "Mặc định" : product.getGeneral().getAttributes().getLaptop_tan_so_quet());
        laptop.setWebcam(product.getGeneral().getAttributes().getLaptop_camera_webcam() == null? "Mặc định" : product.getGeneral().getAttributes().getLaptop_camera_webcam());
        laptop.setImage("https://cellphones.com.vn/media/catalog/product" + product.getGeneral().getAttributes().getAds_base_image());
        return laptop;
    }
}
