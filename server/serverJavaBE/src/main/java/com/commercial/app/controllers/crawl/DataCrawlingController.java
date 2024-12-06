package com.commercial.app.controllers.crawl;

import com.commercial.app.services.OrderLaptopService;
import com.commercial.app.services.crawl.CrawlingData;
import com.commercial.app.services.impl.ImplOrderLaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data")
public class DataCrawlingController {

    @Autowired
    private CrawlingData crawlingData;

    @Autowired
    private OrderLaptopService OrderLaptopService;

    @GetMapping("{size}")
    private ResponseEntity<?> crawlingDataResponse(@PathVariable int size) {
        crawlingData.fetchDataFromUrl(size);
        OrderLaptopService.createSampleLaptopOrders();
        return ResponseEntity.ok("Sample Done");
    };
}
