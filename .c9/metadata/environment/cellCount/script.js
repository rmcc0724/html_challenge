{"filter":false,"title":"script.js","tooltip":"/cellCount/script.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":6,"column":1},"end":{"row":6,"column":2},"action":"insert","lines":["o"],"id":499},{"start":{"row":6,"column":2},"end":{"row":6,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":6,"column":3},"end":{"row":6,"column":5},"action":"insert","lines":["()"],"id":500}],[{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"insert","lines":["v"],"id":501},{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"insert","lines":["a"]},{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":["r"]}],[{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":[" "],"id":502},{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["i"]}],[{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":[" "],"id":503},{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["="]}],[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":[" "],"id":504},{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":["0"]},{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":[";"]}],[{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":[" "],"id":505},{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["i"]}],[{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":[" "],"id":506},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["<"]}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":[" "],"id":507}],[{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["d"],"id":508},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["a"]},{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["y"]},{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["s"]}],[{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":[";"],"id":509}],[{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":[" "],"id":510},{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":["i"]},{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":["+"]},{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["+"]}],[{"start":{"row":6,"column":29},"end":{"row":6,"column":30},"action":"insert","lines":[" "],"id":511},{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":["{"]},{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"insert","lines":["}"]}],[{"start":{"row":6,"column":31},"end":{"row":8,"column":0},"action":"insert","lines":["","    ",""],"id":512}],[{"start":{"row":7,"column":4},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":513},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":10,"column":0},"end":{"row":40,"column":9},"action":"remove","lines":["        for (var j = 0; j < states.length; j++) {","            //If the index is the first or the last one do the following","            if (j === 0 || j === states.length - 1) {","                console.log(j);","","                ///if the second or second to last index = 0 make the current index 0 or if not make it 1","                if (j === 0 && states[1] === 0) {","                    newArr.push(0);","                }","                else if (j === 0 && states[1] === 1) {","                    newArr.push(1);","                }","","                if (j === states.length - 1 && states[states.length - 2] === 0) {","                    newArr.push(0);","                }","                else if (j === states.length - 1 && states[states.length - 2] === 1) {","                    newArr.push(1);","                }","            }","            //If the index not equal to the first or the last one do the following ","            else if (j !== 0 || j !== states.length - 1) {","                console.log(j);","                if (states[j - 1] === states[j + 1]) {","                    newArr.push(0);","                }","                else {","                    newArr.push(1);","                }","            }","        }"],"id":514}],[{"start":{"row":7,"column":0},"end":{"row":37,"column":9},"action":"insert","lines":["        for (var j = 0; j < states.length; j++) {","            //If the index is the first or the last one do the following","            if (j === 0 || j === states.length - 1) {","                console.log(j);","","                ///if the second or second to last index = 0 make the current index 0 or if not make it 1","                if (j === 0 && states[1] === 0) {","                    newArr.push(0);","                }","                else if (j === 0 && states[1] === 1) {","                    newArr.push(1);","                }","","                if (j === states.length - 1 && states[states.length - 2] === 0) {","                    newArr.push(0);","                }","                else if (j === states.length - 1 && states[states.length - 2] === 1) {","                    newArr.push(1);","                }","            }","            //If the index not equal to the first or the last one do the following ","            else if (j !== 0 || j !== states.length - 1) {","                console.log(j);","                if (states[j - 1] === states[j + 1]) {","                    newArr.push(0);","                }","                else {","                    newArr.push(1);","                }","            }","        }"],"id":515}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "],"id":516},{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":[" "]},{"start":{"row":37,"column":9},"end":{"row":37,"column":13},"action":"remove","lines":["    "]},{"start":{"row":37,"column":9},"end":{"row":38,"column":0},"action":"insert","lines":["",""]},{"start":{"row":39,"column":4},"end":{"row":40,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":39,"column":5},"end":{"row":40,"column":0},"action":"remove","lines":["",""],"id":517}],[{"start":{"row":37,"column":9},"end":{"row":38,"column":0},"action":"remove","lines":["",""],"id":518}],[{"start":{"row":6,"column":36},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":519},{"start":{"row":7,"column":0},"end":{"row":7,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":38,"column":9},"end":{"row":39,"column":0},"action":"insert","lines":["",""],"id":520},{"start":{"row":39,"column":0},"end":{"row":39,"column":8},"action":"insert","lines":["        "]},{"start":{"row":39,"column":8},"end":{"row":40,"column":0},"action":"insert","lines":["",""]},{"start":{"row":40,"column":0},"end":{"row":40,"column":8},"action":"insert","lines":["        "]},{"start":{"row":40,"column":8},"end":{"row":41,"column":0},"action":"insert","lines":["",""]},{"start":{"row":41,"column":0},"end":{"row":41,"column":8},"action":"insert","lines":["        "]},{"start":{"row":41,"column":8},"end":{"row":42,"column":0},"action":"insert","lines":["",""]},{"start":{"row":42,"column":0},"end":{"row":42,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":47,"column":29},"end":{"row":47,"column":30},"action":"insert","lines":["2"],"id":521}],[{"start":{"row":42,"column":4},"end":{"row":42,"column":8},"action":"remove","lines":["    "],"id":522},{"start":{"row":42,"column":0},"end":{"row":42,"column":4},"action":"remove","lines":["    "]},{"start":{"row":41,"column":8},"end":{"row":42,"column":0},"action":"remove","lines":["",""]},{"start":{"row":41,"column":4},"end":{"row":41,"column":8},"action":"remove","lines":["    "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":4},"action":"remove","lines":["    "]},{"start":{"row":40,"column":8},"end":{"row":41,"column":0},"action":"remove","lines":["",""]},{"start":{"row":40,"column":4},"end":{"row":40,"column":8},"action":"remove","lines":["    "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":39,"column":8},"end":{"row":40,"column":0},"action":"remove","lines":["",""],"id":523},{"start":{"row":39,"column":4},"end":{"row":39,"column":8},"action":"remove","lines":["    "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":4},"action":"remove","lines":["    "]},{"start":{"row":38,"column":9},"end":{"row":39,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":43,"column":0},"end":{"row":43,"column":1},"action":"insert","lines":["/"],"id":524},{"start":{"row":43,"column":1},"end":{"row":43,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":43,"column":1},"end":{"row":43,"column":2},"action":"remove","lines":["/"],"id":525},{"start":{"row":43,"column":0},"end":{"row":43,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":38,"column":9},"end":{"row":39,"column":0},"action":"insert","lines":["",""],"id":526},{"start":{"row":39,"column":0},"end":{"row":39,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":39,"column":8},"end":{"row":39,"column":9},"action":"insert","lines":["n"],"id":527},{"start":{"row":39,"column":9},"end":{"row":39,"column":10},"action":"insert","lines":["e"]},{"start":{"row":39,"column":10},"end":{"row":39,"column":11},"action":"insert","lines":["w"]},{"start":{"row":39,"column":11},"end":{"row":39,"column":12},"action":"insert","lines":["A"]},{"start":{"row":39,"column":12},"end":{"row":39,"column":13},"action":"insert","lines":["r"]},{"start":{"row":39,"column":13},"end":{"row":39,"column":14},"action":"insert","lines":["r"]}],[{"start":{"row":39,"column":14},"end":{"row":39,"column":15},"action":"insert","lines":["."],"id":528},{"start":{"row":39,"column":15},"end":{"row":39,"column":16},"action":"insert","lines":["m"]},{"start":{"row":39,"column":16},"end":{"row":39,"column":17},"action":"insert","lines":["a"]},{"start":{"row":39,"column":17},"end":{"row":39,"column":18},"action":"insert","lines":["p"]}],[{"start":{"row":39,"column":18},"end":{"row":39,"column":20},"action":"insert","lines":["()"],"id":529}],[{"start":{"row":39,"column":19},"end":{"row":39,"column":20},"action":"insert","lines":["v"],"id":530},{"start":{"row":39,"column":20},"end":{"row":39,"column":21},"action":"insert","lines":["a"]},{"start":{"row":39,"column":21},"end":{"row":39,"column":22},"action":"insert","lines":["l"]},{"start":{"row":39,"column":22},"end":{"row":39,"column":23},"action":"insert","lines":["u"]}],[{"start":{"row":39,"column":23},"end":{"row":39,"column":24},"action":"insert","lines":["e"],"id":531}],[{"start":{"row":39,"column":24},"end":{"row":39,"column":25},"action":"insert","lines":[" "],"id":532},{"start":{"row":39,"column":25},"end":{"row":39,"column":26},"action":"insert","lines":["="]},{"start":{"row":39,"column":26},"end":{"row":39,"column":27},"action":"insert","lines":[">"]}],[{"start":{"row":39,"column":27},"end":{"row":39,"column":28},"action":"insert","lines":[" "],"id":533},{"start":{"row":39,"column":28},"end":{"row":39,"column":29},"action":"insert","lines":["v"]},{"start":{"row":39,"column":29},"end":{"row":39,"column":30},"action":"insert","lines":["a"]},{"start":{"row":39,"column":30},"end":{"row":39,"column":31},"action":"insert","lines":["l"]},{"start":{"row":39,"column":31},"end":{"row":39,"column":32},"action":"insert","lines":["u"]},{"start":{"row":39,"column":32},"end":{"row":39,"column":33},"action":"insert","lines":["e"]}],[{"start":{"row":39,"column":34},"end":{"row":39,"column":35},"action":"insert","lines":[";"],"id":534}],[{"start":{"row":39,"column":8},"end":{"row":39,"column":9},"action":"insert","lines":["v"],"id":535},{"start":{"row":39,"column":9},"end":{"row":39,"column":10},"action":"insert","lines":["a"]},{"start":{"row":39,"column":10},"end":{"row":39,"column":11},"action":"insert","lines":["r"]}],[{"start":{"row":39,"column":11},"end":{"row":39,"column":12},"action":"insert","lines":[" "],"id":536},{"start":{"row":39,"column":12},"end":{"row":39,"column":13},"action":"insert","lines":["t"]},{"start":{"row":39,"column":13},"end":{"row":39,"column":14},"action":"insert","lines":["a"]}],[{"start":{"row":39,"column":13},"end":{"row":39,"column":14},"action":"remove","lines":["a"],"id":537}],[{"start":{"row":39,"column":12},"end":{"row":39,"column":13},"action":"remove","lines":["t"],"id":538},{"start":{"row":39,"column":11},"end":{"row":39,"column":12},"action":"remove","lines":[" "]}],[{"start":{"row":39,"column":10},"end":{"row":39,"column":11},"action":"remove","lines":["r"],"id":539},{"start":{"row":39,"column":9},"end":{"row":39,"column":10},"action":"remove","lines":["a"]},{"start":{"row":39,"column":8},"end":{"row":39,"column":9},"action":"remove","lines":["v"]}],[{"start":{"row":39,"column":8},"end":{"row":39,"column":9},"action":"insert","lines":["t"],"id":540},{"start":{"row":39,"column":9},"end":{"row":39,"column":10},"action":"insert","lines":["e"]},{"start":{"row":39,"column":10},"end":{"row":39,"column":11},"action":"insert","lines":["m"]},{"start":{"row":39,"column":11},"end":{"row":39,"column":12},"action":"insert","lines":["p"]}],[{"start":{"row":39,"column":12},"end":{"row":39,"column":13},"action":"insert","lines":[" "],"id":541},{"start":{"row":39,"column":13},"end":{"row":39,"column":14},"action":"insert","lines":["="]}],[{"start":{"row":39,"column":14},"end":{"row":39,"column":15},"action":"insert","lines":[" "],"id":542}],[{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":["    var newArr = [];",""],"id":543}],[{"start":{"row":5,"column":8},"end":{"row":5,"column":14},"action":"remove","lines":["newArr"],"id":544},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["t"]},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["e"]},{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["m"]},{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"insert","lines":["p"]}],[{"start":{"row":5,"column":15},"end":{"row":5,"column":17},"action":"remove","lines":["[]"],"id":545},{"start":{"row":5,"column":15},"end":{"row":5,"column":21},"action":"insert","lines":["states"]}],[{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["."],"id":546},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["m"]},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":["p"]},{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":["a"]}],[{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"remove","lines":["a"],"id":547},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"remove","lines":["p"]}],[{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":["a"],"id":548},{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":["p"]}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":27},"action":"insert","lines":["()"],"id":549}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":["v"],"id":550},{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["a"]},{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":["l"]},{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"insert","lines":["u"]},{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"insert","lines":["e"]}],[{"start":{"row":5,"column":31},"end":{"row":5,"column":32},"action":"insert","lines":[" "],"id":551},{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"insert","lines":["="]},{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"insert","lines":[">"]}],[{"start":{"row":5,"column":34},"end":{"row":5,"column":35},"action":"insert","lines":[" "],"id":552},{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"insert","lines":["v"]},{"start":{"row":5,"column":36},"end":{"row":5,"column":37},"action":"insert","lines":["a"]},{"start":{"row":5,"column":37},"end":{"row":5,"column":38},"action":"insert","lines":["l"]},{"start":{"row":5,"column":38},"end":{"row":5,"column":39},"action":"insert","lines":["u"]},{"start":{"row":5,"column":39},"end":{"row":5,"column":40},"action":"insert","lines":["e"]}],[{"start":{"row":9,"column":28},"end":{"row":9,"column":34},"action":"remove","lines":["states"],"id":553},{"start":{"row":9,"column":28},"end":{"row":9,"column":29},"action":"insert","lines":["t"]},{"start":{"row":9,"column":29},"end":{"row":9,"column":30},"action":"insert","lines":["e"]},{"start":{"row":9,"column":30},"end":{"row":9,"column":31},"action":"insert","lines":["m"]},{"start":{"row":9,"column":31},"end":{"row":9,"column":32},"action":"insert","lines":["p"]}],[{"start":{"row":11,"column":33},"end":{"row":11,"column":39},"action":"remove","lines":["states"],"id":554},{"start":{"row":11,"column":33},"end":{"row":11,"column":37},"action":"insert","lines":["temp"]}],[{"start":{"row":15,"column":31},"end":{"row":15,"column":37},"action":"remove","lines":["states"],"id":555},{"start":{"row":15,"column":31},"end":{"row":15,"column":35},"action":"insert","lines":["temp"]}],[{"start":{"row":18,"column":36},"end":{"row":18,"column":42},"action":"remove","lines":["states"],"id":556},{"start":{"row":18,"column":36},"end":{"row":18,"column":40},"action":"insert","lines":["temp"]}],[{"start":{"row":22,"column":26},"end":{"row":22,"column":32},"action":"remove","lines":["states"],"id":557},{"start":{"row":22,"column":26},"end":{"row":22,"column":30},"action":"insert","lines":["temp"]}],[{"start":{"row":22,"column":45},"end":{"row":22,"column":51},"action":"remove","lines":["states"],"id":558},{"start":{"row":22,"column":45},"end":{"row":22,"column":49},"action":"insert","lines":["temp"]}],[{"start":{"row":22,"column":50},"end":{"row":22,"column":56},"action":"remove","lines":["states"],"id":559},{"start":{"row":22,"column":50},"end":{"row":22,"column":54},"action":"insert","lines":["temp"]}],[{"start":{"row":25,"column":31},"end":{"row":25,"column":37},"action":"remove","lines":["states"],"id":560},{"start":{"row":25,"column":31},"end":{"row":25,"column":35},"action":"insert","lines":["temp"]}],[{"start":{"row":25,"column":50},"end":{"row":25,"column":56},"action":"remove","lines":["states"],"id":561},{"start":{"row":25,"column":50},"end":{"row":25,"column":54},"action":"insert","lines":["temp"]}],[{"start":{"row":25,"column":55},"end":{"row":25,"column":61},"action":"remove","lines":["states"],"id":562},{"start":{"row":25,"column":55},"end":{"row":25,"column":59},"action":"insert","lines":["temp"]}],[{"start":{"row":30,"column":38},"end":{"row":30,"column":44},"action":"remove","lines":["states"],"id":563},{"start":{"row":30,"column":38},"end":{"row":30,"column":42},"action":"insert","lines":["temp"]}],[{"start":{"row":32,"column":38},"end":{"row":32,"column":44},"action":"remove","lines":["states"],"id":564},{"start":{"row":32,"column":38},"end":{"row":32,"column":42},"action":"insert","lines":["temp"]}],[{"start":{"row":32,"column":20},"end":{"row":32,"column":26},"action":"remove","lines":["states"],"id":565},{"start":{"row":32,"column":20},"end":{"row":32,"column":24},"action":"insert","lines":["temp"]}],[{"start":{"row":42,"column":11},"end":{"row":42,"column":17},"action":"remove","lines":["newArr"],"id":566},{"start":{"row":42,"column":11},"end":{"row":42,"column":15},"action":"insert","lines":["temp"]}],[{"start":{"row":45,"column":0},"end":{"row":45,"column":1},"action":"insert","lines":["/"],"id":567},{"start":{"row":45,"column":1},"end":{"row":45,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":44,"column":0},"end":{"row":44,"column":1},"action":"insert","lines":["/"],"id":568},{"start":{"row":44,"column":1},"end":{"row":44,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":45,"column":1},"end":{"row":45,"column":2},"action":"remove","lines":["/"],"id":569},{"start":{"row":45,"column":0},"end":{"row":45,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":39,"column":9},"end":{"row":40,"column":0},"action":"insert","lines":["",""],"id":570},{"start":{"row":40,"column":0},"end":{"row":40,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":40,"column":8},"end":{"row":41,"column":0},"action":"insert","lines":["                console.log(j);",""],"id":571}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":8},"action":"remove","lines":["        "],"id":572},{"start":{"row":40,"column":0},"end":{"row":40,"column":16},"action":"remove","lines":["                "]}],[{"start":{"row":40,"column":23},"end":{"row":41,"column":0},"action":"remove","lines":["",""],"id":573}],[{"start":{"row":40,"column":20},"end":{"row":40,"column":21},"action":"remove","lines":["j"],"id":574}],[{"start":{"row":40,"column":20},"end":{"row":40,"column":24},"action":"insert","lines":["temp"],"id":575}],[{"start":{"row":40,"column":8},"end":{"row":40,"column":9},"action":"insert","lines":["."],"id":576}],[{"start":{"row":40,"column":8},"end":{"row":40,"column":9},"action":"remove","lines":["."],"id":577}],[{"start":{"row":40,"column":8},"end":{"row":40,"column":9},"action":"insert","lines":["/"],"id":578},{"start":{"row":40,"column":9},"end":{"row":40,"column":10},"action":"insert","lines":["/"]}],[{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"insert","lines":["/"],"id":579},{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["/"]}],[{"start":{"row":41,"column":42},"end":{"row":42,"column":0},"action":"insert","lines":["",""],"id":580},{"start":{"row":42,"column":0},"end":{"row":42,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"insert","lines":["n"],"id":581},{"start":{"row":42,"column":9},"end":{"row":42,"column":10},"action":"insert","lines":["e"]},{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"insert","lines":["w"]}],[{"start":{"row":42,"column":11},"end":{"row":42,"column":12},"action":"insert","lines":["A"],"id":582},{"start":{"row":42,"column":12},"end":{"row":42,"column":13},"action":"insert","lines":["r"]},{"start":{"row":42,"column":13},"end":{"row":42,"column":14},"action":"insert","lines":["r"]}],[{"start":{"row":42,"column":14},"end":{"row":42,"column":15},"action":"insert","lines":[" "],"id":583},{"start":{"row":42,"column":15},"end":{"row":42,"column":16},"action":"insert","lines":["="]}],[{"start":{"row":42,"column":16},"end":{"row":42,"column":17},"action":"insert","lines":[" "],"id":584}],[{"start":{"row":42,"column":17},"end":{"row":42,"column":19},"action":"insert","lines":["[]"],"id":585}],[{"start":{"row":42,"column":19},"end":{"row":42,"column":20},"action":"insert","lines":[";"],"id":586}],[{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"remove","lines":["0"],"id":587}],[{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"insert","lines":["1"],"id":588}],[{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"remove","lines":["0"],"id":589}],[{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"insert","lines":["1"],"id":590}],[{"start":{"row":1,"column":20},"end":{"row":1,"column":21},"action":"remove","lines":["0"],"id":591}],[{"start":{"row":1,"column":20},"end":{"row":1,"column":21},"action":"insert","lines":["1"],"id":592}],[{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"remove","lines":["0"],"id":593}],[{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["1"],"id":594}],[{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"remove","lines":["0"],"id":595}],[{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"insert","lines":["1"],"id":596}],[{"start":{"row":31,"column":7},"end":{"row":31,"column":8},"action":"insert","lines":["/"],"id":597},{"start":{"row":31,"column":8},"end":{"row":31,"column":9},"action":"insert","lines":["/"]}],[{"start":{"row":46,"column":1},"end":{"row":46,"column":2},"action":"remove","lines":["/"],"id":598},{"start":{"row":46,"column":0},"end":{"row":46,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":0,"column":0},"end":{"row":45,"column":1},"action":"remove","lines":["var cells = [1, 0, 0, 0, 0, 1, 0, 0];","var cells2 = [1, 1, 1, 0, 1, 1, 1, 1];","","function cellCompete(states, days) {","    var newArr = [];","    var temp = states.map(value => value);","    //Creating a for loop to traverse through the array of cells","    for (var i = 0; i < days; i++) {","","        for (var j = 0; j < temp.length; j++) {","            //If the index is the first or the last one do the following","            if (j === 0 || j === temp.length - 1) {","               // console.log(j);","","                ///if the second or second to last index = 0 make the current index 0 or if not make it 1","                if (j === 0 && temp[1] === 0) {","                    newArr.push(0);","                }","                else if (j === 0 && temp[1] === 1) {","                    newArr.push(1);","                }","","                if (j === temp.length - 1 && temp[temp.length - 2] === 0) {","                    newArr.push(0);","                }","                else if (j === temp.length - 1 && temp[temp.length - 2] === 1) {","                    newArr.push(1);","                }","            }","            //If the index not equal to the first or the last one do the following ","            else if (j !== 0 || j !== temp.length - 1) {","       //         console.log(j);","                if (temp[j - 1] === temp[j + 1]) {","                    newArr.push(0);","                }","                else {","                    newArr.push(1);","                }","            }","        }","        //console.log(temp);","        temp = newArr.map(value => value);","        newArr = [];","    }","    return temp;","}"],"id":601},{"start":{"row":0,"column":0},"end":{"row":38,"column":1},"action":"insert","lines":["var cells = [1, 0, 0, 0, 0, 1, 0, 0];","var cells2 = [1, 1, 1, 0, 1, 1, 1, 1];","","function cellCompete(states, days) {","    var newArr = [];","    var temp = states.map(value => value);","    for (var i = 0; i < days; i++) {","","        for (var j = 0; j < temp.length; j++) {","            if (j === 0 || j === temp.length - 1) {","","                if (j === 0 && temp[1] === 0) {","                    newArr.push(0);","                }","                else if (j === 0 && temp[1] === 1) {","                    newArr.push(1);","                }","","                if (j === temp.length - 1 && temp[temp.length - 2] === 0) {","                    newArr.push(0);","                }","                else if (j === temp.length - 1 && temp[temp.length - 2] === 1) {","                    newArr.push(1);","                }","            }","            else if (j !== 0 || j !== temp.length - 1) {","                if (temp[j - 1] === temp[j + 1]) {","                    newArr.push(0);","                }","                else {","                    newArr.push(1);","                }","            }","        }","        temp = newArr.map(value => value);","        newArr = [];","    }","    return temp;","}"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":40,"column":36},"end":{"row":40,"column":36},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1546841804351,"hash":"418a992825e4623401e0cd3489a1a34c3bf4c78f"}