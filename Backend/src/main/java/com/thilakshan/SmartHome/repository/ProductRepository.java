package com.thilakshan.SmartHome.repository;

import com.thilakshan.SmartHome.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@CrossOrigin("http://localhost:3000")
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findAll();

    Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);

    Page<Product> findByNameContainingIgnoreCase(@RequestParam("name") String name, Pageable pageable);
}
