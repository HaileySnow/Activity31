import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';



@Injectable({
	providedIn: 'root',
})
export class ProductService {
	placeholder = 'https://placehold.co/100';
	private readonly products: Product[] = [
		{
			id: 1,
			name: 'Omnitrix Replica',
			price: 799,
			description: 'Channel Bens alien-transforming powers with this highly detailed Omnitrix. The perfect collectible for any fan, it lights up and makes sounds just like in the show!',
			imageUrl: 'omnitrix.png',
		},
		{
			id: 2,
			name: 'Gwen Tennyson Shirt',
			price: 699,
			description: 'Celebrate Gwens intellect and charm with this stylish shirt featuring her iconic design. Soft and durable, its the perfect tribute to one of the shows smartest characters.',
			imageUrl: 'gwen.png',
		},
		{
			id: 3,
			name: 'Ben Tumbler',
			price: 299,
			description: 'Stay hydrated in hero style! This stainless steel tumbler, adorned with Bens signature logo, is great for on-the-go adventures or chill moments at home.',
			imageUrl: 'tumblr.png',
		},
		{
			id: 4,
			name: 'Grandpa Max',
			price: 999,
			description: 'Relive your favorite RV road trips with Grandpa Max! This detailed figure is a must-have for fans who love the wisdom and humor he brought to the series.',
			imageUrl: 'lolomaxshirt.png',
		},
		{
			id: 5,
			name: 'Aesthetic Ben Case',
			price: 499,
			description: 'Protect your phone with an aesthetic upgrade! This sleek case features a bold, modern twist on Bens classic look, combining vibrant colors and durable materials.',
			imageUrl: 'phonecase.png',
		},
		{
			id: 6,
			name: 'Ben 10 Two-Piece Set',
			price: 1299,
			description: 'Go full hero mode in this two-piece outfit! Featuring a comfortable hoodie and joggers adorned with dynamic Ben 10 graphics, it’s the ultimate statement for fans on the move.',
			imageUrl: 'twopieces.png',
		},
		{
			id: 7,
			name: 'Ben 10 Black Shirt',
			price: 999,
			description: 'Embrace sleek simplicity with the Ben 10 Black Shirt. A subtle yet striking design that’s easy to pair with anything—perfect for understated fandom vibes.',
			imageUrl: 'blackshirt.png',
		},
		{
			id: 8,
			name: 'Ben 10 Shirt (Original)',
			price: 399,
			description: 'Throw it back with the Ben 10 Shirt (Original)! This design brings the classic logo and colors straight from the series’ early days—a must-have for nostalgic fans.',
			imageUrl: 'benshirt.png',
		},
		{
			id: 9,
			name: 'Ben 10 White Shirt',
			price: 199,
			description: 'Bright, bold, and heroic! The Ben 10 White Shirt pops with vibrant graphics that show off your love for the series. A versatile piece for any wardrobe.',
			imageUrl: 'whiteshirt.png',
		},
		{
			id: 10,
			name: 'Ben Boxers',
			price: 149,
			description:'Add some hero flair to your everyday essentials with these Ben 10 Boxers! Made with soft, breathable fabric, they feature fun designs inspired by the Omnitrix and your favorite aliens. Comfortable and stylish, these are perfect for fans who want to keep their fandom close, even on casual days.',
			imageUrl: 'boxers.png',
		}
	];

	getProducts(): Observable<Product[]> {
		return new Observable<Product[]>((subscriber) => {
			subscriber.next(this.products);
			subscriber.complete();
		});
	}
}