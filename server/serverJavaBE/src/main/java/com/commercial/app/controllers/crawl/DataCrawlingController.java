package com.commercial.app.controllers.crawl;

import com.commercial.app.services.crawl.CrawlingData;
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

    @GetMapping("{size}")
    private ResponseEntity<?> crawlingDataResponse(@PathVariable int size) {
        return ResponseEntity.ok(crawlingData.fetchDataFromUrl(size));
    };
}
