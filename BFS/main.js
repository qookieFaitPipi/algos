let graph = {};
graph['you'] = ['alice', 'max'];
graph['alice'] = ['max', 'bob'];
graph['bob'] = [];
graph['max'] = ['alex'];
graph['alex'] = ['pank'];
graph['pank'] = ['dasha'];

const searchItem = 'dasha'

let queue = [];
let searched = [];

const enqueue = (item) => queue.push(item);
const dequeue = () => queue.shift();

for (let i = 0; i < graph['you'].length; i++) {
  enqueue(graph['you'][i]);
}

while(queue.length != 0) {
  console.log('iter')
  if(queue[0] != searchItem) {
    for (let i = 0; i < graph[queue[0]].length; i++) {
      if(!searched.includes(graph[queue[0]][i])) {
        enqueue(graph[queue[0]][i]);
      }
    }
    searched.push(queue[0]);
    dequeue();
  } else {
    console.log(`${searchItem} found!`)
    process.exit()
  }
}