var _ = require('lodash');

var entries = [
  {
    "id": "12",
    "parentId": "0",
    "text": "Man",
    "level": "1",
  },
  {
    "id": "6",
    "parentId": "12",
    "text": "Boy",
    "level": "2",
  },
  {
    "id": "7",
    "parentId": "12",
    "text": "Other",
    "level": "2",
  },
  {
    "id": "9",
    "parentId": "0",
    "text": "Woman",
    "level": "1",
  },
  {
    "id": "11",
    "parentId": "9",
    "text": "Girl",
    "level": "2",
  }
];



const recursive_lists = (data) => {
    const grouped = _.groupBy(data, (item) => item.parentId);
  
    function childrenOf(parentId) {
      return (grouped[parentId] || []).map((item) => ({
        id: item.id,
        title: item.text,
        child: childrenOf(item.id),
      }));
    }
  
    return childrenOf("0");
  };

  console.log(recursive_lists(entries))