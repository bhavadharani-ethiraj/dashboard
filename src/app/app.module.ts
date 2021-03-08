import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { EmojiComponent } from './emoji/emoji.component';
import { MarkStatisticsComponent } from './mark-statistics/mark-statistics.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { AnalysisTabulationComponent } from './analysis-tabulation/analysis-tabulation.component';
import { InferencesComponent } from './inferences/inferences.component';
import { LearningGapComponent } from './learning-gap/learning-gap.component';
import { MisspelledWordTableComponent } from './misspelled-word-table/misspelled-word-table.component';
import { GrammerMistakesComponent } from './grammer-mistakes/grammer-mistakes.component';
import { OverallPercentageComponent } from './overall-percentage/overall-percentage.component';
import { DoughChartComponent } from './dough-chart/dough-chart.component';
import { ServeService } from './serve.service';
import { StudentsWisePage13thComponent } from './students-wise-page13th/students-wise-page13th.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    EmojiComponent,
    MarkStatisticsComponent,
    AnalysisComponent,
    AnalysisTabulationComponent,
    InferencesComponent,
    LearningGapComponent,
    MisspelledWordTableComponent,
    GrammerMistakesComponent,
    OverallPercentageComponent,
    DoughChartComponent,
    StudentsWisePage13thComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
    
  ],
  providers: [ServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
