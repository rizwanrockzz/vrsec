package com.example.annotations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
@Configuration
public class AppConfig{
@Bean
public Dept getDept(){
return new ITDept();
}}
