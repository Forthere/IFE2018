/* 绘制柱状图 */
function drawBar(data) {
	var barGraph = document.querySelector("#bar-graph");
	var graphWidth = 700;  // 图像区域的宽度
	var graphHeight = 300; // 图像区域的高度
	const graphPadding = 25; 
	const axisWidth = graphWidth - graphPadding; // x轴的宽度
	const axisHeight = graphHeight - graphPadding * 1.5;  // y轴的高度
	const barWidth = 4.5; // 一个柱子的宽度
	const barGap = 10;   // 柱子的间隔宽度
	const barColor = ["#ff7c7c","#9287e7","#32d3eb","#5bc49f","#d4ec59","#feb64d","#60acfc","#a252a9","#2390d2"];
	const axisColor = "#000";	
	var dataMax = 0;

	barGraph.setAttribute("width", graphWidth);
	barGraph.setAttribute("height", graphHeight);

	// 	拿到柱状图中的最大值Max
	for(let i = 0; i < data.length; i++) {
		for(let j = 0; j < data[i].sale.length; j++) {
			let temp = Math.max(...data[i].sale);
			if(temp > dataMax) {
				dataMax = temp;
			}
		}
	}
	// console.log(dataMax);

	// 	根据Max和你用来绘制柱状图图像区域的高度，进行一个数据和像素的折算比例
	var rate = dataMax / axisHeight;

	// 	绘制横轴及纵轴
	let barHtml = [];
	barHtml.push("<line x1=" + graphPadding + " y1=0 x2=" + graphPadding + " y2=" + axisHeight + " stroke=" + axisColor + " stroke-width='2'/>");
	barHtml.push("<line x1=" + graphPadding + " y1=" + axisHeight + " x2=" + axisWidth + " y2=" + axisHeight + " stroke=" + axisColor + " stroke-width='2'/>");

	// 	遍历数据｛
	// 		计算将要绘制柱子的高度和位置
	// 		绘制每一个柱子
	// 	｝
	// ｝
	
	for(let i = 0; i < data.length; i++) {
		for(let j = 0; j < data[i].sale.length; j++) {
			let num = parseInt(data[i].sale[j]);
			let barBlock = data.length * barWidth;
			let x = graphPadding + (j + 1) * barGap + i * barWidth + j * barBlock;
			barHtml.push("<rect width=" + barWidth + " height=" + (num / rate) + " x=" + x + " y=" + (axisHeight - num / rate) + " fill=" + barColor[i] + " />");
		}
	}
	barGraph.innerHTML = barHtml.join(""); 

}