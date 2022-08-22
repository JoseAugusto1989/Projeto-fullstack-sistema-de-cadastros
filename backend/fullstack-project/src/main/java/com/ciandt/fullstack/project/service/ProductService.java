package com.ciandt.fullstack.project.service;

import com.ciandt.fullstack.project.model.Product;
import com.ciandt.fullstack.project.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Transactional
    public Product save(Product product) {
        return productRepository.save(product);
    }

    public Page<Product> findAll(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }

    @Transactional
    public void delete(Product product) {
        productRepository.delete(product);
    }

    // pega o preço de venda e subtrae pelo preço de compra, e chega-se ao lucro 'gain'
    private Double gainPerPiece(Double salePrice, Double purchasePrice) {
        return salePrice - purchasePrice;
    }

    public Product createProduct(Product product) {
        Double perPiece = gainPerPiece(product.getSalePrice(), product.getPurchasePrice());
        product.setGain(perPiece);
        return productRepository.save(product);
    }
}
