package com.commercial.app.utils;

import com.google.gson.Gson;

public class Test {
    public static void main(String[] args) {
        Gson gson = new Gson();
        String json = gson.toJson("Hello, Gson!");
        System.out.println(json);
    }
}
