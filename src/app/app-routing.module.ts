import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';

// DEMO PAGES

// Dashboards

import { AnalyticsComponent } from './DemoPages/Dashboards/analytics/analytics.component';

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
// import {TabsComponent} from './DemoPages/Components/tabs/tabs.component';
import { CarouselComponent } from './DemoPages/Components/carousel/carousel.component';
import { ModalsComponent } from './DemoPages/Components/modals/modals.component';
import { ProgressBarComponent } from './DemoPages/Components/progress-bar/progress-bar.component';
import { PaginationComponent } from './DemoPages/Components/pagination/pagination.component';
import { TooltipsPopoversComponent } from './DemoPages/Components/tooltips-popovers/tooltips-popovers.component';

// Tables

import { TablesMainComponent } from './DemoPages/Tables/tables-main/tables-main.component';

// Widgets

import { ChartBoxes3Component } from './DemoPages/Widgets/chart-boxes3/chart-boxes3.component';

// Forms Elements

import { ControlsComponent } from './DemoPages/Forms/Elements/controls/controls.component';
import { LayoutComponent } from './DemoPages/Forms/Elements/layout/layout.component';

// Charts

import { ChartjsComponent } from './DemoPages/Charts/chartjs/chartjs.component';

import { TabsComponent } from './DemoPages/Components/tabs/tabs.component';
import { AmchartComponent } from './DemoPages/Dashboards/amchart/amchart.component';
import { DetailsPartComponent } from './DemoPages/Components/details-part/details-part.component';
import { CategoriesComponent } from './DemoPages/Dashboards/categories/categories/categories.component';
import { TrendingComponent } from './DemoPages/Dashboards/trending/trending/trending.component';
import { ConversationsComponent } from './DemoPages/Dashboards/reports/conversations/conversations.component';
import { PaymentsComponent } from './DemoPages/Dashboards/reports/payments/payments.component';
import { AstrologercallComponent } from './DemoPages/Dashboards/reports/conversations/astrologercall/astrologercall.component';
import { AstrologerchatComponent } from './DemoPages/Dashboards/reports/conversations/astrologerchat/astrologerchat.component';
import { CallComponent } from './DemoPages/Dashboards/reports/conversations/call/call.component';
import { ChatComponent } from './DemoPages/Dashboards/reports/conversations/chat/chat.component';
import { UsercallComponent } from './DemoPages/Dashboards/reports/conversations/usercall/usercall.component';
import { UserchatComponent } from './DemoPages/Dashboards/reports/conversations/userchat/userchat.component';
import { PaymentListComponent } from './DemoPages/Dashboards/reports/conversations/payment-list/payment-list.component';







const routes: Routes = [


  { path: '', component: LoginBoxedComponent },
  { path: 'pages/login-boxed', component: LoginBoxedComponent },

  { path: 'pages/register-boxed', component: RegisterBoxedComponent },
  { path: 'pages/forgot-password-boxed', component: ForgotPasswordBoxedComponent },

  {
    path: '',
    component: BaseLayoutComponent,
    children: [

      // Dashboads

      { path: 'dashboard', component: AnalyticsComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'categories', component: CategoriesComponent, data: { extraParameter: 'dashboardsMenu' }},
      { path: 'trending', component: TrendingComponent, data: { extraParameter: 'dashboardsMenu' }},
      { path: 'conversations', component: ConversationsComponent, data: { extraParameter: 'dashboardsMenu' }},
      { path: 'payments', component: PaymentsComponent, data: { extraParameter: 'dashboardsMenu' }},
 
      // Conversation
      { path: 'astrologercall', component: AstrologercallComponent,data: { extraParameter: 'dashboardsMenu' }},
      { path: 'astrologerchat', component: AstrologerchatComponent,data: { extraParameter: 'dashboardsMenu' }},
      { path: 'call', component: CallComponent,data: { extraParameter: 'dashboardsMenu' }},
      { path: 'chat', component: ChatComponent,data: { extraParameter: 'dashboardsMenu' }},
      { path: 'usercall', component: UsercallComponent,data: { extraParameter: 'dashboardsMenu' }},
      { path: 'userchat', component: UserchatComponent,data: { extraParameter: 'dashboardsMenu' }},
      { path: 'paymentlist', component: PaymentListComponent,data: { extraParameter: 'dashboardsMenu' }},



      // Elements

      { path: 'elements/buttons-standard', component: StandardComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/dropdowns', component: DropdownsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/icons', component: IconsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/cards', component: CardsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/list-group', component: ListGroupsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/timeline', component: TimelineComponent, data: { extraParameter: 'elementsMenu' } },

      // Components


      { path: 'components/tabs', component: TabsComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/accordions', component: AccordionsComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/modals', component: ModalsComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/progress-bar', component: ProgressBarComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/tooltips-popovers', component: TooltipsPopoversComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/carousel', component: CarouselComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/pagination', component: PaginationComponent, data: { extraParameter: 'componentsMenu' } },
      {path:'components/details/:id',component:DetailsPartComponent,data:{extraParameter: 'componentsMenu'}},

      // Tables

      { path: 'tables/bootstrap', component: TablesMainComponent, data: { extraParameter: 'tablesMenu' } },

      // Widgets

      { path: 'widgets/chart-boxes-3', component: ChartBoxes3Component, data: { extraParameter: 'pagesMenu3' } },

      // Forms Elements

      { path: 'forms/controls', component: ControlsComponent, data: { extraParameter: 'formElementsMenu' } },
      { path: 'forms/layouts', component: LayoutComponent, data: { extraParameter: 'formElementsMenu' } },

      // Charts

      { path: 'charts/chartjs', component: ChartjsComponent, data: { extraParameter: '' } },
      { path: 'amchart', component: AmchartComponent }

    ]

  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [

      // User Pages

    //   { path: 'pages/login-boxed', component: LoginBoxedComponent, data: { extraParameter: 'dashboardsMenu' } },
    //   { path: 'pages/register-boxed', component: RegisterBoxedComponent, data: { extraParameter: 'dashboardsMenu' } },
    //   { path: 'pages/forgot-password-boxed', component: ForgotPasswordBoxedComponent, data: { extraParameter: 'dashboardsMenu' } },
     ]
  },

  { path: 'login-boxed', component: LoginBoxedComponent, data: { extraParameter: '' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}