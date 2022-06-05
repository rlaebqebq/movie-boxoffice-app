const BoxofficeGraphStyle = {
  chart: {
    width: 400,
    height: 130,
    domainPadding: { x: 30, y: 0 },
    padding: { left: 55, right: 55, top: 20 },
  },
  animate: {
    duration: 1000,
    onLoad: { duration: 2000 },
  },

  bar: {
    barWidth: 10,
    barRatio: 1,
    cornerRadius: 0,
    animate: {
      duration: 500,
      onLoad: { duration: 2000 },
    },
    style: {
      data: {
        color: '#ffffff',
        fill: '#6d53df',
        stroke: '#6d53df',
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

export default BoxofficeGraphStyle