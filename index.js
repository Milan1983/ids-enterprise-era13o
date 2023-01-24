var dataset = [
  {
    data: [
      {
        name: "Automotive",
        shortName: "Auto",
        abbrName: "A",
        value: 3,
        tooltip: "Custom Tooltip - {{value}}"
      },
      {
        name: "Distribution",
        shortName: "Dist",
        abbrName: "D",
        value: 3
      },
      {
        name: "Equipment",
        shortName: "Equip",
        abbrName: "E",
        value: 2
      },
      {
        name: "Fashion",
        shortName: "Fash",
        abbrName: "F",
        value: 2
      },
      {
        name: "Food",
        shortName: "Food",
        abbrName: "F",
        value: 6
      },
      {
        name: "Healthcare",
        shortName: "Health",
        abbrName: "H",
        value: 4000
      },
      {
        name: "Other",
        shortName: "Other",
        abbrName: "O",
        value: 5500
      }
    ]
  }
];

$("#column-bar-example").chart({
  type: "column",
  dataset: dataset,
  yAxis: {
    ticks: {
      number: 8,
      format: "d"
    }
  }
});
