import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts/ng2-charts';
import { faTh, faCheck, faTrash, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as Chart from 'chart.js';


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
})
export class AnalyticsComponent implements OnInit {
  showChart: boolean = true
  visible: boolean = false
  chartdata: any[];
  ngOnInit(): void {

    this.getChart();
    // this.getchart2();
    this.getchart3();
  }
  faTh = faTh;
  faCheck = faCheck;
  faTrash = faTrash;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  heading = 'Analytics Dashboard';
  subheading = 'This is an example dashboard created using build-in elements and components.';
  icon = 'pe-7s-plane icon-gradient bg-tempting-azure';

  slideConfig6 = {
    className: 'center',
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    adaptiveHeight: true,
    dots: true,
  };

  public datasets = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 46, 55, 38, 59, 80],
      datalabels: {
        display: false,
      },

    }
  ];

  public datasets2 = [
    {
      label: 'My First dataset',
      data: [46, 55, 59, 80, 81, 38, 65, 59, 80],
      datalabels: {
        display: false,
      },

    }
  ];

  public datasets3 = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 55, 38, 59, 80, 46],
      datalabels: {
        display: false,
      },

    }
  ];
  public lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(247, 185, 36, 0.2)',
      borderColor: '#f7b924',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f7b924',
      pointBackgroundColor: '#fff',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f7b924',
    },
  ];

  public lineChartColors2: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(48, 177, 255, 0.2)',
      borderColor: '#30b1ff',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#30b1ff',
      pointBackgroundColor: '#ffffff',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#30b1ff',
    },
  ];

  public lineChartColors3: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(86, 196, 121, 0.2)',
      borderColor: '#56c479',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#56c479',
      pointBackgroundColor: '#fff',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#56c479',
    },
  ];

  public labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  public options = {
    layout: {
      padding: {
        left: 0,
        right: 8,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false
  };


  // GET Chart DATA
  getChartData() {
    if (this.visible = true) {
      setTimeout(() => {
        this.getChart();
        // this.getchart2();
        this.getchart3();

      }, 100);

    }
    else {
      this.visible = false;
    }
    // this.showChart = !this.showChart;
    // this.visible = !this.visible;

  }
  // onClick(){
  //  debugger;
  //   if(this.visible==true){
  //   this.getChart();
  //   }
  //   }

  getChart() {
    am4core.options.commercialLicense = true;
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.padding(40, 40, 40, 40);

    chart.numberFormatter.bigNumberPrefixes = [
      { "number": 1e+3, "suffix": "K" },
      { "number": 1e+6, "suffix": "M" },
      { "number": 1e+9, "suffix": "B" }
    ];

    let label = chart.plotContainer.createChild(am4core.Label);
    label.x = am4core.percent(97);
    label.y = am4core.percent(95);
    label.horizontalCenter = "right";
    label.verticalCenter = "middle";
    label.dx = -15;
    label.fontSize = 50;

    let playButton = chart.plotContainer.createChild(am4core.PlayButton);
    playButton.x = am4core.percent(97);
    playButton.y = am4core.percent(95);
    playButton.dy = -2;
    playButton.verticalCenter = "middle";
    playButton.events.on("toggled", function (event) {
      if (event.target.isActive) {
        play();
      }
      else {
        stop();
      }
    })

    let stepDuration = 4000;

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "network";
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.rangeChangeEasing = am4core.ease.linear;
    valueAxis.rangeChangeDuration = stepDuration;
    valueAxis.extraMax = 0.1;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "network";
    series.dataFields.valueX = "MAU";
    series.tooltipText = "{valueX.value}"
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;
    series.interpolationDuration = stepDuration;
    series.interpolationEasing = am4core.ease.linear;

    let labelBullet = series.bullets.push(new am4charts.LabelBullet())
    labelBullet.label.horizontalCenter = "right";
    labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
    labelBullet.label.textAlign = "end";
    labelBullet.label.dx = -10;

    chart.zoomOutButton.disabled = true;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    let week = 1;
    label.text = week.toString();

    let interval;

    function play() {
      interval = setInterval(function () {
        nextWeek();
      }, stepDuration)
      nextWeek();
    }

    function stop() {
      if (interval) {
        clearInterval(interval);
      }
    }

    function nextWeek() {
      week++

      if (week > 52) {
        week = 1;
      }

      let newData = allData[week];
      let itemsWithNonZero = 0;
      for (var i = 0; i < chart.data.length; i++) {
        chart.data[i].MAU = newData[i].MAU;
        if (chart.data[i].MAU > 0) {
          itemsWithNonZero++;
        }
      }

      if (week == 1) {
        series.interpolationDuration = stepDuration / 4;
        valueAxis.rangeChangeDuration = stepDuration / 4;
      }
      else {
        series.interpolationDuration = stepDuration;
        valueAxis.rangeChangeDuration = stepDuration;
      }

      chart.invalidateRawData();
      label.text = week.toString();

      categoryAxis.zoom({ start: 0, end: itemsWithNonZero / categoryAxis.dataItems.length });
    }


    categoryAxis.sortBySeries = series;

    let allData = {
      "1": [
        {
          "network": "No. Of Users",
          "MAU": 9546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }


      ],
      "2": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "3": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 97546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "4": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 37546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "5": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 4546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "6": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 2000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "7": [
        {
          "network": "No. Of Users",
          "MAU": 4470000
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 2470000
        },
        {
          "network": "Total Revenue",
          "MAU": 87546541
        }
      ],
      "8": [
        {
          "network": "No. Of Users",
          "MAU": 9546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }


      ],
      "9": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "10": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 97546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "11": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 37546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "12": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 4546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "13": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 2000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "14": [
        {
          "network": "No. Of Users",
          "MAU": 4470000
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 2470000
        },
        {
          "network": "Total Revenue",
          "MAU": 87546541
        }
      ],
      "15": [
        {
          "network": "No. Of Users",
          "MAU": 9546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }


      ],
      "16": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "17": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 97546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "18": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 37546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "19": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 4546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "20": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 2000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "21": [
        {
          "network": "No. Of Users",
          "MAU": 4470000
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 2470000
        },
        {
          "network": "Total Revenue",
          "MAU": 87546541
        }
      ],
      "22": [
        {
          "network": "No. Of Users",
          "MAU": 9546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }


      ],
      "23": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "24": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 97546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "25": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 37546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "26": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 4546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "27": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 2000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "28": [
        {
          "network": "No. Of Users",
          "MAU": 4470000
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 2470000
        },
        {
          "network": "Total Revenue",
          "MAU": 87546541
        }
      ],
      "29": [
        {
          "network": "No. Of Users",
          "MAU": 9546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }


      ],
      "30": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "31": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 97546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "32": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 37546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "33": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 4546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "34": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 2000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "35": [
        {
          "network": "No. Of Users",
          "MAU": 4470000
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 2470000
        },
        {
          "network": "Total Revenue",
          "MAU": 87546541
        }
      ],
      "36": [
        {
          "network": "No. Of Users",
          "MAU": 9546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }


      ],
      "37": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "38": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 97546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "39": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 37546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "40": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 4546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "41": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 2000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "42": [
        {
          "network": "No. Of Users",
          "MAU": 4470000
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 2470000
        },
        {
          "network": "Total Revenue",
          "MAU": 87546541
        }
      ],
      "43": [
        {
          "network": "No. Of Users",
          "MAU": 9546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }


      ],
      "44": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "45": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 97546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "46": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 37546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "47": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 4546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "48": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 2000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "49": [
        {
          "network": "No. Of Users",
          "MAU": 4470000
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 2470000
        },
        {
          "network": "Total Revenue",
          "MAU": 87546541
        }
      ],
      "50": [
        {
          "network": "No. Of Users",
          "MAU": 9546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }


      ],
      "51": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 87546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
      "52": [
        {
          "network": "No. Of Users",
          "MAU": 6546465
        },
        {
          "network": "No. Of Astrologers",
          "MAU": 5000000
        },
        {
          "network": "No. Of Calls",
          "MAU": 97546541
        },

        {
          "network": "No. Of Chats",
          "MAU": 4470000
        },
        {
          "network": "Total Revenue",
          "MAU": 8486456
        }
      ],
    }

    chart.data = JSON.parse(JSON.stringify(allData[week]));
    categoryAxis.zoom({ start: 0, end: 1 / chart.data.length });

    series.events.on("inited", function () {
      setTimeout(function () {
        playButton.isActive = true; // this starts interval
      }, 2000)
    })

  }






  getchart3() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdiv3", am4charts.XYChart);


    // Add data
    chart.data = [{
      "month": "Jan",
      "tusers": 2.5,
      "tastrologers": 2.5,
      "tncalls": 2.1,
      "tnchats": 4.3,
      "trevenue": 0.2,

    }, {
      "month": "Feb",
      "tusers": 2.6,
      "tastrologers": 2.7,
      "tncalls": 2.2,
      "tnchats": 4.3,
      "trevenue": 9.3,

    }, {
      "month": "Mar",
      "tusers": 2.8,
      "tastrologers": 2.9,
      "tncalls": 2.4,
      "tnchats": 4.3,
      "trevenue": 0.3,

    },
    {
      "month": "Apr",
      "tusers": 2.8,
      "tastrologers": 2.9,
      "tncalls": 2.4,
      "tnchats": 4.3,
      "trevenue": 8.3,

    },
    {
      "month": "May",
      "tusers": 2.8,
      "tastrologers": 2.9,
      "tncalls": 2.4,
      "tnchats": 0.3,
      "trevenue": 0.3,

    },
    {
      "month": "June",
      "tusers": 2.8,
      "tastrologers": 2.9,
      "tncalls": 2.4,
      "tnchats": 0.3,
      "trevenue": 7.3,

    },
    {
      "month": "July",
      "tusers": 2.8,
      "tastrologers": 2.9,
      "tncalls": 2.4,
      "tnchats": 4.3,
      "trevenue": 0.3,

    },
    {
      "month": "Aug",
      "tusers": 2.8,
      "tastrologers": 2.9,
      "tncalls": 2.4,
      "tnchats": 0.3,
      "trevenue": 4.3,

    },
    {
      "month": "Sept",
      "tusers": 2.8,
      "tastrologers": 2.9,
      "tncalls": 2.4,
      "tnchats": 0.3,
      "trevenue": 0.3,

    },
    {
      "month": "Oct",
      "tusers": 2.8,
      "tastrologers": 2.9,
      "tncalls": 2.4,
      "tnchats": 0.3,
      "trevenue": 7.3,

    },
    {
      "month": "Nov",
      "tusers": 2.8,
      "tastrologers": 2.9,
      "tncalls": 2.4,
      "tnchats": 0.3,
      "trevenue": 5.3,

    },
    {
      "month": "Dec",
      "tusers": 2.8,
      "tastrologers": 2.9,
      "tncalls": 2.4,
      "tnchats": 4.3,
      "trevenue": 6.3,

    },

    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.grid.template.location = 0;


    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.min = 0;

    // Create series
    function createSeries(field, name) {

      // Set up series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "month";
      series.sequencedInterpolation = true;

      // Make it stacked
      series.stacked = true;

      // Configure columns
      series.columns.template.width = am4core.percent(60);
      series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";

      // Add label
      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.text = "{valueY}";
      labelBullet.locationY = 0.5;
      labelBullet.label.hideOversized = true;

      return series;
    }


    createSeries("tusers", "Total No. Of Users");
    createSeries("tastrologers", "Total No. Of Astrologers");
    createSeries("tncalls", "Total No. Of Calls");
    createSeries("tnchats", "Total No. Of Chats");
    createSeries("trevenue", "Total Revenue");
    // createSeries("africa", "Africa");

    // Legend
    chart.legend = new am4charts.Legend();
  }

 
  

}