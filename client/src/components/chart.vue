<template>
    <div>
      <canvas id="qubit-chart"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
import axios from 'axios';

export default {
  name: 'QubitChart',
  data() {
    return {
      x: [],
      y: []
    }
  },
  mounted() {
    let f = async () => {
      let data = await this.getData();
      // let data_x = data['x']
      // let data_y = data['y']
      console.log(data);
      const ctx = document.getElementById('qubit-chart');
      new Chart(ctx, {
          type: 'line',
          data: {
              labels: data["x"],
              datasets:[
                  {
                      label: "qubit",
                      data: data.y
                  }
              ]
          },
          options: {
              responsive: true,
              padding: 100,
              plugins: {
                  legend: {
                      display: false,
                      position: 'top',
                  },
                  title: {
                      display: false,
                      text: 'Chart.js Line Chart'
                  }
              }
          }
      });
    }
    f()
  },
  methods: {
    async getData() {
        try {
            let response = await axios.get('http://localhost:3000/graph');
            let data = response.data;
            // this.x = data['x'];
            // this.y = data['y'];
            return {"x": data.x, "y": data.y};
        } catch (error) {
            console.log(error);
        }
    }
  }
}
</script>


