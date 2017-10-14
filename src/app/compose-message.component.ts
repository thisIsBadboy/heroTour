import { Component } from '@angular/core';

@Component({
	template: `
		<h2>Contact Crisis Center</h2>

		<div>
  			<div>
		    	<label>Message: </label>
		  	</div>
		  	
		  	<div>
		    	<textarea [(ngModel)]="message" rows="10" cols="35" [disabled]="sending"></textarea>
		  	</div>
		</div>
	`,

	styles: [ '{ position: relative; bottom: 10%; }' ],
})
export class ComposeMessageComponent {

}