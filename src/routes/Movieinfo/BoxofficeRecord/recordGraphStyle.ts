const RecordGraphStyle = {
  chart: {
    height: 180,
    padding: { left: 19, right: 19, top: 25, bottom: 65 },
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

  scatter: {
    style: {
      data: {
        fill: '#586df5',
      },
    },
  },

  line: {
    style: {
      data: {
        color: '#ffffff',
        stroke: '#586df5 ',
        strokeLinecap: 'round',
      },
    },
  },

  axisX: {
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
  axisY: {
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
        fill: 'transparent',
      },
    },
  },
}

export default RecordGraphStyle
