import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3Widget = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const width = 400;
    const height = 300;
    const radius = 100;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie().value((d) => d);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const values = data.datasets[0].data;
    const labels = data.labels;

    svg.attr('width', width).attr('height', height);

    svg.append('text')
      .attr('x', width / 2)
      .attr('y', 20)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .text('Gráfico de Torta D3.js');

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2 + 10})`);

    const pieData = pie(values);

    g.selectAll('path')
      .data(pieData)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (_, i) => color(i));

    g.selectAll('text')
      .data(pieData)
      .enter()
      .append('text')
      .text((d, i) => labels[i])
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .style('text-anchor', 'middle');
  }, [data]);

  return <svg ref={ref}></svg>;
};

export default D3Widget;