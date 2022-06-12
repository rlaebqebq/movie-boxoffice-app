const RecordGraphStyle = {
  chart: {
    height: 140,
    padding: { left: 19, right: 19, top: 25, bottom: 25 },
  },

  bar: {
    barWidth: 10,
    barRatio: 1,
    cornerRadius: 0,
    style: {
      data: {
        color: '#ffffff',
        fill: '#586df5 ',
        stroke: '#586df5 ',
      },
    },
  },

  axis: {
    style: {
      axis: {
        stroke: 'transparent',
      },
      grid: {
        stroke: 'transparent',
      },
      ticks: {
        stroke: 'transparent',
      },
      tickLabels: {
        strokeWidth: 3,
        fill: '#bdc7cf',
      },
    },
  },
}

export default RecordGraphStyle
