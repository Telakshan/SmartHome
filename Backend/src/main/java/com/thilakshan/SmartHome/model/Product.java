package com.thilakshan.SmartHome.model;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name="product")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @ManyToOne
    @JoinColumn(name="category_id", nullable = false)
    private ProductCategory category;

    @Column(name="name")
    private String name;

    @Column(name="description")
    private String description;

    @Column(name="image_url")
    private String imageUrl;

    @Column(name="price")
    private BigDecimal price;

    @Column(name="date_created")
    @CreationTimestamp
    private Date dateCreated;


}
