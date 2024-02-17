package org.example.diary.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class TestController {

    @RequestMapping("/api/test")
    public List<String> test(){
        return Arrays.asList("Test");
    }

}
