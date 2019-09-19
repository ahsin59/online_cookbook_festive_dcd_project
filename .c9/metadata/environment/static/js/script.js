{"filter":false,"title":"script.js","tooltip":"/static/js/script.js","undoManager":{"mark":44,"position":44,"stack":[[{"start":{"row":39,"column":4},"end":{"row":40,"column":0},"action":"insert","lines":["",""],"id":7},{"start":{"row":40,"column":0},"end":{"row":40,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":40,"column":2},"end":{"row":55,"column":4},"action":"insert","lines":[" // Add Ingredient Button","  $(\"#add-ingredient-btn\").click(function() {","      $(\"#form-field:last\").append(getHtml());","  });","","  function getHtml() {","      return '<div class=\"input-field\">\\","      <input type=\"text\" class=\"validate\" id=\"ingredient\" name=\"ingredient\" required />\\","      <label for=\"ingredient\">Ingredient (e.g. 100g Flour)</label>\\","      </div>';","  }","","  // Remove Ingredient Button","  $(\"#remove-ingredient-btn\").click(function() {","      $(\"#form-field\").children(\"div:last\").remove()","  })"],"id":8}],[{"start":{"row":40,"column":19},"end":{"row":40,"column":20},"action":"remove","lines":["t"],"id":9},{"start":{"row":40,"column":18},"end":{"row":40,"column":19},"action":"remove","lines":["n"]},{"start":{"row":40,"column":17},"end":{"row":40,"column":18},"action":"remove","lines":["e"]},{"start":{"row":40,"column":16},"end":{"row":40,"column":17},"action":"remove","lines":["i"]},{"start":{"row":40,"column":15},"end":{"row":40,"column":16},"action":"remove","lines":["d"]},{"start":{"row":40,"column":14},"end":{"row":40,"column":15},"action":"remove","lines":["e"]},{"start":{"row":40,"column":13},"end":{"row":40,"column":14},"action":"remove","lines":["r"]},{"start":{"row":40,"column":12},"end":{"row":40,"column":13},"action":"remove","lines":["g"]},{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"remove","lines":["n"]},{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"remove","lines":["I"]}],[{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"insert","lines":["m"],"id":10},{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"insert","lines":["e"]},{"start":{"row":40,"column":12},"end":{"row":40,"column":13},"action":"insert","lines":["t"]},{"start":{"row":40,"column":13},"end":{"row":40,"column":14},"action":"insert","lines":["h"]},{"start":{"row":40,"column":14},"end":{"row":40,"column":15},"action":"insert","lines":["o"]}],[{"start":{"row":40,"column":15},"end":{"row":40,"column":16},"action":"insert","lines":["d"],"id":11}],[{"start":{"row":41,"column":19},"end":{"row":41,"column":20},"action":"remove","lines":["t"],"id":12},{"start":{"row":41,"column":18},"end":{"row":41,"column":19},"action":"remove","lines":["n"]},{"start":{"row":41,"column":17},"end":{"row":41,"column":18},"action":"remove","lines":["e"]},{"start":{"row":41,"column":16},"end":{"row":41,"column":17},"action":"remove","lines":["i"]},{"start":{"row":41,"column":15},"end":{"row":41,"column":16},"action":"remove","lines":["d"]},{"start":{"row":41,"column":14},"end":{"row":41,"column":15},"action":"remove","lines":["e"]},{"start":{"row":41,"column":13},"end":{"row":41,"column":14},"action":"remove","lines":["r"]},{"start":{"row":41,"column":12},"end":{"row":41,"column":13},"action":"remove","lines":["g"]},{"start":{"row":41,"column":11},"end":{"row":41,"column":12},"action":"remove","lines":["n"]},{"start":{"row":41,"column":10},"end":{"row":41,"column":11},"action":"remove","lines":["i"]}],[{"start":{"row":41,"column":10},"end":{"row":41,"column":11},"action":"insert","lines":["m"],"id":13},{"start":{"row":41,"column":11},"end":{"row":41,"column":12},"action":"insert","lines":["e"]},{"start":{"row":41,"column":12},"end":{"row":41,"column":13},"action":"insert","lines":["t"]},{"start":{"row":41,"column":13},"end":{"row":41,"column":14},"action":"insert","lines":["h"]}],[{"start":{"row":41,"column":14},"end":{"row":41,"column":15},"action":"insert","lines":["o"],"id":14},{"start":{"row":41,"column":15},"end":{"row":41,"column":16},"action":"insert","lines":["d"]}],[{"start":{"row":47,"column":55},"end":{"row":47,"column":56},"action":"remove","lines":["t"],"id":15},{"start":{"row":47,"column":54},"end":{"row":47,"column":55},"action":"remove","lines":["n"]},{"start":{"row":47,"column":53},"end":{"row":47,"column":54},"action":"remove","lines":["e"]},{"start":{"row":47,"column":52},"end":{"row":47,"column":53},"action":"remove","lines":["i"]},{"start":{"row":47,"column":51},"end":{"row":47,"column":52},"action":"remove","lines":["d"]},{"start":{"row":47,"column":50},"end":{"row":47,"column":51},"action":"remove","lines":["e"]},{"start":{"row":47,"column":49},"end":{"row":47,"column":50},"action":"remove","lines":["r"]},{"start":{"row":47,"column":48},"end":{"row":47,"column":49},"action":"remove","lines":["g"]},{"start":{"row":47,"column":47},"end":{"row":47,"column":48},"action":"remove","lines":["n"]}],[{"start":{"row":47,"column":46},"end":{"row":47,"column":47},"action":"remove","lines":["i"],"id":16}],[{"start":{"row":47,"column":46},"end":{"row":47,"column":47},"action":"insert","lines":["m"],"id":17},{"start":{"row":47,"column":47},"end":{"row":47,"column":48},"action":"insert","lines":["e"]},{"start":{"row":47,"column":48},"end":{"row":47,"column":49},"action":"insert","lines":["t"]},{"start":{"row":47,"column":49},"end":{"row":47,"column":50},"action":"insert","lines":["h"]},{"start":{"row":47,"column":50},"end":{"row":47,"column":51},"action":"insert","lines":["o"]}],[{"start":{"row":47,"column":51},"end":{"row":47,"column":52},"action":"insert","lines":["d"],"id":18}],[{"start":{"row":47,"column":69},"end":{"row":47,"column":70},"action":"remove","lines":["t"],"id":19},{"start":{"row":47,"column":68},"end":{"row":47,"column":69},"action":"remove","lines":["n"]},{"start":{"row":47,"column":67},"end":{"row":47,"column":68},"action":"remove","lines":["e"]},{"start":{"row":47,"column":66},"end":{"row":47,"column":67},"action":"remove","lines":["i"]},{"start":{"row":47,"column":65},"end":{"row":47,"column":66},"action":"remove","lines":["d"]},{"start":{"row":47,"column":64},"end":{"row":47,"column":65},"action":"remove","lines":["e"]},{"start":{"row":47,"column":63},"end":{"row":47,"column":64},"action":"remove","lines":["r"]},{"start":{"row":47,"column":62},"end":{"row":47,"column":63},"action":"remove","lines":["g"]},{"start":{"row":47,"column":61},"end":{"row":47,"column":62},"action":"remove","lines":["n"]}],[{"start":{"row":47,"column":60},"end":{"row":47,"column":61},"action":"remove","lines":["i"],"id":20}],[{"start":{"row":47,"column":60},"end":{"row":47,"column":61},"action":"insert","lines":["m"],"id":21},{"start":{"row":47,"column":61},"end":{"row":47,"column":62},"action":"insert","lines":["e"]},{"start":{"row":47,"column":62},"end":{"row":47,"column":63},"action":"insert","lines":["t"]},{"start":{"row":47,"column":63},"end":{"row":47,"column":64},"action":"insert","lines":["h"]}],[{"start":{"row":47,"column":64},"end":{"row":47,"column":65},"action":"insert","lines":["o"],"id":22},{"start":{"row":47,"column":65},"end":{"row":47,"column":66},"action":"insert","lines":["d"]}],[{"start":{"row":48,"column":27},"end":{"row":48,"column":28},"action":"remove","lines":["t"],"id":23},{"start":{"row":48,"column":26},"end":{"row":48,"column":27},"action":"remove","lines":["n"]},{"start":{"row":48,"column":25},"end":{"row":48,"column":26},"action":"remove","lines":["e"]},{"start":{"row":48,"column":24},"end":{"row":48,"column":25},"action":"remove","lines":["i"]},{"start":{"row":48,"column":23},"end":{"row":48,"column":24},"action":"remove","lines":["d"]},{"start":{"row":48,"column":22},"end":{"row":48,"column":23},"action":"remove","lines":["e"]},{"start":{"row":48,"column":21},"end":{"row":48,"column":22},"action":"remove","lines":["r"]},{"start":{"row":48,"column":20},"end":{"row":48,"column":21},"action":"remove","lines":["g"]}],[{"start":{"row":48,"column":19},"end":{"row":48,"column":20},"action":"remove","lines":["n"],"id":24},{"start":{"row":48,"column":18},"end":{"row":48,"column":19},"action":"remove","lines":["i"]}],[{"start":{"row":48,"column":18},"end":{"row":48,"column":19},"action":"insert","lines":["m"],"id":25},{"start":{"row":48,"column":19},"end":{"row":48,"column":20},"action":"insert","lines":["e"]},{"start":{"row":48,"column":20},"end":{"row":48,"column":21},"action":"insert","lines":["t"]},{"start":{"row":48,"column":21},"end":{"row":48,"column":22},"action":"insert","lines":["h"]},{"start":{"row":48,"column":22},"end":{"row":48,"column":23},"action":"insert","lines":["o"]}],[{"start":{"row":48,"column":23},"end":{"row":48,"column":24},"action":"insert","lines":["d"],"id":26}],[{"start":{"row":48,"column":35},"end":{"row":48,"column":36},"action":"remove","lines":["t"],"id":27},{"start":{"row":48,"column":34},"end":{"row":48,"column":35},"action":"remove","lines":["n"]},{"start":{"row":48,"column":33},"end":{"row":48,"column":34},"action":"remove","lines":["e"]},{"start":{"row":48,"column":32},"end":{"row":48,"column":33},"action":"remove","lines":["i"]},{"start":{"row":48,"column":31},"end":{"row":48,"column":32},"action":"remove","lines":["d"]},{"start":{"row":48,"column":30},"end":{"row":48,"column":31},"action":"remove","lines":["e"]},{"start":{"row":48,"column":29},"end":{"row":48,"column":30},"action":"remove","lines":["r"]},{"start":{"row":48,"column":28},"end":{"row":48,"column":29},"action":"remove","lines":["g"]},{"start":{"row":48,"column":27},"end":{"row":48,"column":28},"action":"remove","lines":["n"]}],[{"start":{"row":48,"column":26},"end":{"row":48,"column":27},"action":"remove","lines":["I"],"id":28}],[{"start":{"row":48,"column":26},"end":{"row":48,"column":27},"action":"insert","lines":["m"],"id":29},{"start":{"row":48,"column":27},"end":{"row":48,"column":28},"action":"insert","lines":["e"]},{"start":{"row":48,"column":28},"end":{"row":48,"column":29},"action":"insert","lines":["t"]},{"start":{"row":48,"column":29},"end":{"row":48,"column":30},"action":"insert","lines":["h"]},{"start":{"row":48,"column":30},"end":{"row":48,"column":31},"action":"insert","lines":["o"]}],[{"start":{"row":48,"column":31},"end":{"row":48,"column":32},"action":"insert","lines":["d"],"id":30}],[{"start":{"row":48,"column":48},"end":{"row":48,"column":49},"action":"remove","lines":["r"],"id":31},{"start":{"row":48,"column":47},"end":{"row":48,"column":48},"action":"remove","lines":["u"]},{"start":{"row":48,"column":46},"end":{"row":48,"column":47},"action":"remove","lines":["o"]},{"start":{"row":48,"column":45},"end":{"row":48,"column":46},"action":"remove","lines":["l"]},{"start":{"row":48,"column":44},"end":{"row":48,"column":45},"action":"remove","lines":["F"]},{"start":{"row":48,"column":43},"end":{"row":48,"column":44},"action":"remove","lines":[" "]},{"start":{"row":48,"column":42},"end":{"row":48,"column":43},"action":"remove","lines":["g"]},{"start":{"row":48,"column":41},"end":{"row":48,"column":42},"action":"remove","lines":["0"]}],[{"start":{"row":48,"column":40},"end":{"row":48,"column":41},"action":"remove","lines":["0"],"id":32},{"start":{"row":48,"column":39},"end":{"row":48,"column":40},"action":"remove","lines":["1"]}],[{"start":{"row":48,"column":39},"end":{"row":48,"column":40},"action":"insert","lines":["c"],"id":33},{"start":{"row":48,"column":40},"end":{"row":48,"column":41},"action":"insert","lines":["h"]},{"start":{"row":48,"column":41},"end":{"row":48,"column":42},"action":"insert","lines":["o"]}],[{"start":{"row":48,"column":42},"end":{"row":48,"column":43},"action":"insert","lines":["p"],"id":34},{"start":{"row":48,"column":43},"end":{"row":48,"column":44},"action":"insert","lines":["p"]},{"start":{"row":48,"column":44},"end":{"row":48,"column":45},"action":"insert","lines":["e"]},{"start":{"row":48,"column":45},"end":{"row":48,"column":46},"action":"insert","lines":["d"]}],[{"start":{"row":48,"column":46},"end":{"row":48,"column":47},"action":"insert","lines":[" "],"id":35}],[{"start":{"row":48,"column":47},"end":{"row":48,"column":48},"action":"insert","lines":["s"],"id":36},{"start":{"row":48,"column":48},"end":{"row":48,"column":49},"action":"insert","lines":["m"]},{"start":{"row":48,"column":49},"end":{"row":48,"column":50},"action":"insert","lines":["a"]},{"start":{"row":48,"column":50},"end":{"row":48,"column":51},"action":"insert","lines":["l"]}],[{"start":{"row":48,"column":51},"end":{"row":48,"column":52},"action":"insert","lines":["l"],"id":37}],[{"start":{"row":48,"column":52},"end":{"row":48,"column":53},"action":"insert","lines":[" "],"id":38},{"start":{"row":48,"column":53},"end":{"row":48,"column":54},"action":"insert","lines":["o"]},{"start":{"row":48,"column":54},"end":{"row":48,"column":55},"action":"insert","lines":["n"]},{"start":{"row":48,"column":55},"end":{"row":48,"column":56},"action":"insert","lines":["i"]},{"start":{"row":48,"column":56},"end":{"row":48,"column":57},"action":"insert","lines":["o"]}],[{"start":{"row":48,"column":57},"end":{"row":48,"column":58},"action":"insert","lines":["n"],"id":39}],[{"start":{"row":52,"column":21},"end":{"row":52,"column":22},"action":"remove","lines":["t"],"id":40},{"start":{"row":52,"column":20},"end":{"row":52,"column":21},"action":"remove","lines":["n"]},{"start":{"row":52,"column":19},"end":{"row":52,"column":20},"action":"remove","lines":["e"]},{"start":{"row":52,"column":18},"end":{"row":52,"column":19},"action":"remove","lines":["i"]},{"start":{"row":52,"column":17},"end":{"row":52,"column":18},"action":"remove","lines":["d"]},{"start":{"row":52,"column":16},"end":{"row":52,"column":17},"action":"remove","lines":["e"]},{"start":{"row":52,"column":15},"end":{"row":52,"column":16},"action":"remove","lines":["r"]},{"start":{"row":52,"column":14},"end":{"row":52,"column":15},"action":"remove","lines":["g"]},{"start":{"row":52,"column":13},"end":{"row":52,"column":14},"action":"remove","lines":["n"]},{"start":{"row":52,"column":12},"end":{"row":52,"column":13},"action":"remove","lines":["I"]}],[{"start":{"row":52,"column":12},"end":{"row":52,"column":13},"action":"insert","lines":["m"],"id":41},{"start":{"row":52,"column":13},"end":{"row":52,"column":14},"action":"insert","lines":["e"]},{"start":{"row":52,"column":14},"end":{"row":52,"column":15},"action":"insert","lines":["t"]},{"start":{"row":52,"column":15},"end":{"row":52,"column":16},"action":"insert","lines":["h"]}],[{"start":{"row":52,"column":16},"end":{"row":52,"column":17},"action":"insert","lines":["o"],"id":42},{"start":{"row":52,"column":17},"end":{"row":52,"column":18},"action":"insert","lines":["d"]}],[{"start":{"row":53,"column":22},"end":{"row":53,"column":23},"action":"remove","lines":["t"],"id":43},{"start":{"row":53,"column":21},"end":{"row":53,"column":22},"action":"remove","lines":["n"]},{"start":{"row":53,"column":20},"end":{"row":53,"column":21},"action":"remove","lines":["e"]},{"start":{"row":53,"column":19},"end":{"row":53,"column":20},"action":"remove","lines":["i"]},{"start":{"row":53,"column":18},"end":{"row":53,"column":19},"action":"remove","lines":["d"]},{"start":{"row":53,"column":17},"end":{"row":53,"column":18},"action":"remove","lines":["e"]},{"start":{"row":53,"column":16},"end":{"row":53,"column":17},"action":"remove","lines":["r"]},{"start":{"row":53,"column":15},"end":{"row":53,"column":16},"action":"remove","lines":["g"]},{"start":{"row":53,"column":14},"end":{"row":53,"column":15},"action":"remove","lines":["n"]}],[{"start":{"row":53,"column":13},"end":{"row":53,"column":14},"action":"remove","lines":["i"],"id":44}],[{"start":{"row":53,"column":13},"end":{"row":53,"column":14},"action":"insert","lines":["m"],"id":45},{"start":{"row":53,"column":14},"end":{"row":53,"column":15},"action":"insert","lines":["e"]},{"start":{"row":53,"column":15},"end":{"row":53,"column":16},"action":"insert","lines":["t"]},{"start":{"row":53,"column":16},"end":{"row":53,"column":17},"action":"insert","lines":["h"]},{"start":{"row":53,"column":17},"end":{"row":53,"column":18},"action":"insert","lines":["o"]}],[{"start":{"row":53,"column":18},"end":{"row":53,"column":19},"action":"insert","lines":["d"],"id":46}],[{"start":{"row":39,"column":4},"end":{"row":40,"column":0},"action":"insert","lines":["",""],"id":47},{"start":{"row":40,"column":0},"end":{"row":40,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":57,"column":0},"end":{"row":57,"column":3},"action":"remove","lines":["});"],"id":48}],[{"start":{"row":57,"column":0},"end":{"row":57,"column":3},"action":"insert","lines":["});"],"id":49}],[{"start":{"row":53,"column":1},"end":{"row":56,"column":4},"action":"remove","lines":[" // Remove method Button","  $(\"#remove-method-btn\").click(function() {","      $(\"#form-field\").children(\"div:last\").remove()","  })"],"id":50}],[{"start":{"row":41,"column":2},"end":{"row":51,"column":3},"action":"remove","lines":[" // Add method Button","  $(\"#add-method-btn\").click(function() {","      $(\"#form-field:last\").append(getHtml());","  });","","  function getHtml() {","      return '<div class=\"input-field\">\\","      <input type=\"text\" class=\"validate\" id=\"method\" name=\"method\" required />\\","      <label for=\"method\">method (e.g. chopped small onion)</label>\\","      </div>';","  }"],"id":51}]]},"ace":{"folds":[],"scrolltop":284,"scrollleft":0,"selection":{"start":{"row":41,"column":2},"end":{"row":41,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":1,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1566516952651,"hash":"f625f48314385ad171a8d70cc4cd056ff8f4b0eb"}