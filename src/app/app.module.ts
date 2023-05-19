import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgReduxModule } from '@angular-redux/store';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, ArchitectUIState } from './ThemeOptions/store';
import { ConfigActions } from './ThemeOptions/store/config.actions';
import { AppRoutingModule } from './app-routing.module';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//Search filter
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Daterangepicker } from 'ng2-daterangepicker';
// BOOTSTRAP COMPONENTS

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// LAYOUT


import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';
import { PageTitleComponent } from './Layout/Components/page-title/page-title.component';

// HEADER

import { HeaderComponent } from './Layout/Components/header/header.component';
import { SearchBoxComponent } from './Layout/Components/header/elements/search-box/search-box.component';
import { UserBoxComponent } from './Layout/Components/header/elements/user-box/user-box.component';

// SIDEBAR

import { SidebarComponent } from './Layout/Components/sidebar/sidebar.component';
import { LogoComponent } from './Layout/Components/sidebar/elements/logo/logo.component';

// FOOTER

import { FooterComponent } from './Layout/Components/footer/footer.component';

// DEMO PAGES

// Dashboards

import { AnalyticsComponent } from './DemoPages/Dashboards/analytics/analytics.component';
// import { AmchartComponent } from './DemoPages/Dashboards/amchart/amchart.component';


// Pages

import { ForgotPasswordBoxedComponent } from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import { LoginBoxedComponent } from './DemoPages/UserPages/login-boxed/login-boxed.component';
import { RegisterBoxedComponent } from './DemoPages/UserPages/register-boxed/register-boxed.component';

// Elements

import { StandardComponent } from './DemoPages/Elements/Buttons/standard/standard.component';
import { DropdownsComponent } from './DemoPages/Elements/dropdowns/dropdowns.component';
import { CardsComponent } from './DemoPages/Elements/cards/cards.component';
import { ListGroupsComponent } from './DemoPages/Elements/list-groups/list-groups.component';
import { TimelineComponent } from './DemoPages/Elements/timeline/timeline.component';
import { IconsComponent } from './DemoPages/Elements/icons/icons.component';

// Components

import { AccordionsComponent } from './DemoPages/Components/accordions/accordions.component';
import { TabsComponent } from './DemoPages/Components/tabs/tabs.component';
import { CarouselComponent } from './DemoPages/Components/carousel/carousel.component';
import { ModalsComponent } from './DemoPages/Components/modals/modals.component';
import { ProgressBarComponent } from './DemoPages/Components/progress-bar/progress-bar.component';
import { PaginationComponent } from './DemoPages/Components/pagination/pagination.component';
import { TooltipsPopoversComponent } from './DemoPages/Components/tooltips-popovers/tooltips-popovers.component';

// Tables

import { RegularComponent } from './DemoPages/Tables/regular/regular.component';
import { TablesMainComponent } from './DemoPages/Tables/tables-main/tables-main.component';

// Widgets

import { ChartBoxes3Component } from './DemoPages/Widgets/chart-boxes3/chart-boxes3.component';

// Forms Elements

import { ControlsComponent } from './DemoPages/Forms/Elements/controls/controls.component';
import { LayoutComponent } from './DemoPages/Forms/Elements/layout/layout.component';

// Charts

import { ChartjsComponent } from './DemoPages/Charts/chartjs/chartjs.component';

// Chart.js Examples

import { LineChartComponent } from './DemoPages/Charts/chartjs/examples/line-chart/line-chart.component';
import { BarChartComponent } from './DemoPages/Charts/chartjs/examples/bar-chart/bar-chart.component';
import { ScatterChartComponent } from './DemoPages/Charts/chartjs/examples/scatter-chart/scatter-chart.component';
import { RadarChartComponent } from './DemoPages/Charts/chartjs/examples/radar-chart/radar-chart.component';
import { PolarAreaChartComponent } from './DemoPages/Charts/chartjs/examples/polar-area-chart/polar-area-chart.component';
import { BubbleChartComponent } from './DemoPages/Charts/chartjs/examples/bubble-chart/bubble-chart.component';
import { DynamicChartComponent } from './DemoPages/Charts/chartjs/examples/dynamic-chart/dynamic-chart.component';
import { DoughnutChartComponent } from './DemoPages/Charts/chartjs/examples/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './DemoPages/Charts/chartjs/examples/pie-chart/pie-chart.component';
import { DetailsPartComponent } from './DemoPages/Components/details-part/details-part.component';
import { TrendingComponent } from './DemoPages/Dashboards/trending/trending/trending.component';
import { CategoriesComponent } from './DemoPages/Dashboards/categories/categories/categories.component';
import { AmchartComponent } from './DemoPages/Dashboards/amchart/amchart.component';
import { ConversationsComponent } from './DemoPages/Dashboards/reports/conversations/conversations.component';
import { PaymentsComponent } from './DemoPages/Dashboards/reports/payments/payments.component';
import { ChatComponent } from './DemoPages/Dashboards/reports/conversations/chat/chat.component';
import { CallComponent } from './DemoPages/Dashboards/reports/conversations/call/call.component';
import { UserchatComponent } from './DemoPages/Dashboards/reports/conversations/userchat/userchat.component';
import { UsercallComponent } from './DemoPages/Dashboards/reports/conversations/usercall/usercall.component';
import { AstrologercallComponent } from './DemoPages/Dashboards/reports/conversations/astrologercall/astrologercall.component';
import { AstrologerchatComponent } from './DemoPages/Dashboards/reports/conversations/astrologerchat/astrologerchat.component';
import { PaymentListComponent } from './DemoPages/Dashboards/reports/conversations/payment-list/payment-list.component';





const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [

    // LAYOUT

    AppComponent,
    BaseLayoutComponent,
    PagesLayoutComponent,
    PageTitleComponent,

    // HEADER

    HeaderComponent,
    SearchBoxComponent,
    UserBoxComponent,

    // SIDEBAR

    SidebarComponent,
    LogoComponent,

    // FOOTER

    FooterComponent,

    // DEMO PAGES

    // Dashboards

    AnalyticsComponent,
    // AmchartComponent,

    // User Pages

    ForgotPasswordBoxedComponent,
    LoginBoxedComponent,
    RegisterBoxedComponent,

    // Elements

    StandardComponent,
    IconsComponent,
    DropdownsComponent,
    CardsComponent,
    ListGroupsComponent,
    TimelineComponent,

    // Components

    AccordionsComponent,
    TabsComponent,
    CarouselComponent,
    ModalsComponent,
    ProgressBarComponent,
    PaginationComponent,
    TooltipsPopoversComponent,

    // Tables

    RegularComponent,
    TablesMainComponent,

    // Dashboard Boxes

    ChartBoxes3Component,

    // Form Elements

    ControlsComponent,
    LayoutComponent,

    // CHARTS

    ChartjsComponent,

    // Chart.js Examples

    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    DynamicChartComponent,
    BubbleChartComponent,
    ScatterChartComponent,
    AmchartComponent,
    DetailsPartComponent,
    TrendingComponent,
    CategoriesComponent,
    ConversationsComponent,
    PaymentsComponent,
    ChatComponent,
    CallComponent,
    UserchatComponent,
    UsercallComponent,
    AstrologercallComponent,
    AstrologerchatComponent,
    PaymentListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgReduxModule,
    CommonModule,
    LoadingBarRouterModule,
    //search filter
    Ng2SearchPipeModule,
    Daterangepicker,

    // Angular Bootstrap Components

    PerfectScrollbarModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Charts

    ChartsModule,
  ],
  providers: [
    {
      provide:
        PERFECT_SCROLLBAR_CONFIG,
      // DROPZONE_CONFIG,
      useValue:
        DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      // DEFAULT_DROPZONE_CONFIG,
    },
    ConfigActions,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(private ngRedux: NgRedux<ArchitectUIState>,
    private devTool: DevToolsExtension) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as ArchitectUIState,
      [],
      [devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

  }

}
