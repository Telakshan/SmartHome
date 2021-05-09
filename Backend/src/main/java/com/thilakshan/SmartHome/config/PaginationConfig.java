package com.thilakshan.SmartHome.config;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.ObjectFactory;
import org.springframework.core.convert.ConversionService;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.data.web.config.SpringDataWebConfiguration;


@Configuration
public class PaginationConfig extends SpringDataWebConfiguration {

    public PaginationConfig(ApplicationContext applicationContext, ObjectFactory<ConversionService> conversionService){
        super(applicationContext, conversionService);
    }

    @Bean
    public PageableHandlerMethodArgumentResolver pageableResolver() {
        PageableHandlerMethodArgumentResolver resolver = new PageableHandlerMethodArgumentResolver(sortResolver());
        resolver.setMaxPageSize(25);
        return resolver;
    }
}
