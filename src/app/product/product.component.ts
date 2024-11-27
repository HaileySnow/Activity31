import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-product',
  standalone: true,
  imports:[NgForOf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
 
  private readonly productService = inject(ProductService);
	products: Product[] = [];

	ngOnInit(): void {
		this.productService.getProducts().subscribe((products: Product[]) => {
			this.products = products;
		});
	}

	addToCart() {
		alert('The product has been added to the cart!');
	}

	addToWishlist() {
		alert('The product has been added to the wishlist!');
	}

}
