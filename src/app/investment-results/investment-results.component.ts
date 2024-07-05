import { CurrencyPipe } from "@angular/common";
import { Component, Input, computed, input } from "@angular/core";
import { InvestmentService } from "../investment.service";

@Component({
  selector: "app-investment-results",
  templateUrl: "./investment-results.component.html",
  styleUrl: "./investment-results.component.css",
})
export class InvestmentResultsComponent {

  constructor(private investmentService: InvestmentService){}

  results = computed(() => this.investmentService.resultsData())
}
