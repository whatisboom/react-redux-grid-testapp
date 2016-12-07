import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import { Reducers as gridReducers } from 'react-redux-grid';

export const columns = [{
            name: 'Least Viewed Spaces',
            dataIndex: ['space', 'id'],
            width: 20
        },{
            name: 'Unit',
            dataIndex: ['space', 'attributes', 'unit_number'],
            width: 20
        }, {
            name: 'Size (sqft)',
            dataIndex: ['space', 'attributes', 'space_size', 'value'],
            width: 20,
            renderer: ({col, value, row}) => {
                return parseInt(value);
            }
        }, {
            name: 'Rate',
            dataIndex: ['listing', 'attributes', 'price', 'value'],
            width: 20,
            renderer: ({col, value, row}) => {
                return `$${parseFloat(value).toFixed(2)}`;
            }
        }, {
            name: 'Time',
            dataIndex: 'days_on_market',
            width: 20
        }];

export const store = createStore(
 combineReducers({
  ...gridReducers
 }), Immutable.Map(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const gridData = [
    {
      "days_on_market": 326, 
      "listing": {
        "attributes": {
          "archived": false, 
          "created": "2015-03-09T01:07:34.168885+00:00", 
          "deleted": false, 
          "price": {
            "units": "usd", 
            "value": "18.500000"
          }, 
          "rate": {
            "frequency": "yearly", 
            "type": "triple_net"
          }, 
          "updated": "2016-07-02T10:16:40.570590+00:00"
        }, 
        "id": "1295036197629855209", 
        "relationships": {
          "organizations": {
            "links": {
              "related": "/leases/1295036197629855209/organizations"
            }
          }, 
          "spaces": {
            "links": {
              "related": "/leases/1295036197629855209/spaces/1295036197629855208"
            }
          }
        }, 
        "type": "leases"
      }, 
      "position": 0, 
      "space": {
        "attributes": {
          "created": "2015-03-09T01:07:34.168885+00:00", 
          "deleted": false, 
          "max_contiguous": {
            "units": "sqft", 
            "value": "1316.000000"
          }, 
          "min_divisible": {
            "units": "sqft", 
            "value": "1316.000000"
          }, 
          "space_size": {
            "units": "sqft", 
            "value": "1316.000000"
          }, 
          "unit_number": "C", 
          "updated": "2016-07-02T10:16:40.570590+00:00"
        }, 
        "id": "1295036197629855208", 
        "relationships": {
          "buildings": {
            "links": {
              "related": "/spaces/1295036197629855208/buildings/1295036123600389386"
            }
          }, 
          "leases": {
            "links": {
              "related": "/spaces/1295036197629855208/leases"
            }
          }
        }, 
        "type": "spaces"
      }
    }, 
    {
      "days_on_market": 326, 
      "listing": {
        "attributes": {
          "archived": false, 
          "created": "2015-03-09T01:07:34.168885+00:00", 
          "deleted": false, 
          "price": {
            "units": "usd", 
            "value": "18.500000"
          }, 
          "rate": {
            "frequency": "yearly", 
            "type": "triple_net"
          }, 
          "updated": "2016-07-02T10:16:40.570590+00:00"
        }, 
        "id": "1295036197629855209", 
        "relationships": {
          "organizations": {
            "links": {
              "related": "/leases/1295036197629855209/organizations"
            }
          }, 
          "spaces": {
            "links": {
              "related": "/leases/1295036197629855209/spaces/1295036197629855208"
            }
          }
        }, 
        "type": "leases"
      }, 
      "position": 1, 
      "space": {
        "attributes": {
          "created": "2015-03-09T01:07:34.168885+00:00", 
          "deleted": false, 
          "max_contiguous": {
            "units": "sqft", 
            "value": "1316.000000"
          }, 
          "min_divisible": {
            "units": "sqft", 
            "value": "1316.000000"
          }, 
          "space_size": {
            "units": "sqft", 
            "value": "1316.000000"
          }, 
          "unit_number": "C", 
          "updated": "2016-07-02T10:16:40.570590+00:00"
        }, 
        "id": "1295036197629855208", 
        "relationships": {
          "buildings": {
            "links": {
              "related": "/spaces/1295036197629855208/buildings/1295036123600389386"
            }
          }, 
          "leases": {
            "links": {
              "related": "/spaces/1295036197629855208/leases"
            }
          }
        }, 
        "type": "spaces"
      }
    }, 
    {
      "days_on_market": 326, 
      "listing": {
        "attributes": {
          "archived": false, 
          "created": "2015-03-09T01:07:34.168885+00:00", 
          "deleted": false, 
          "price": {
            "units": "usd", 
            "value": "18.500000"
          }, 
          "rate": {
            "frequency": "yearly", 
            "type": "triple_net"
          }, 
          "updated": "2016-07-02T10:16:40.570590+00:00"
        }, 
        "id": "1295036197629855209", 
        "relationships": {
          "organizations": {
            "links": {
              "related": "/leases/1295036197629855209/organizations"
            }
          }, 
          "spaces": {
            "links": {
              "related": "/leases/1295036197629855209/spaces/1295036197629855208"
            }
          }
        }, 
        "type": "leases"
      }, 
      "position": 2, 
      "space": {
        "attributes": {
          "created": "2015-03-09T01:07:34.168885+00:00", 
          "deleted": false, 
          "max_contiguous": {
            "units": "sqft", 
            "value": "1316.000000"
          }, 
          "min_divisible": {
            "units": "sqft", 
            "value": "1316.000000"
          }, 
          "space_size": {
            "units": "sqft", 
            "value": "1316.000000"
          }, 
          "unit_number": "C", 
          "updated": "2016-07-02T10:16:40.570590+00:00"
        }, 
        "id": "1295036197629855208", 
        "relationships": {
          "buildings": {
            "links": {
              "related": "/spaces/1295036197629855208/buildings/1295036123600389386"
            }
          }, 
          "leases": {
            "links": {
              "related": "/spaces/1295036197629855208/leases"
            }
          }
        }, 
        "type": "spaces"
      }
    }, 
    {
      "days_on_market": 326, 
      "listing": {
        "attributes": {
          "archived": false, 
          "created": "2015-03-09T01:07:34.168885+00:00", 
          "deleted": false, 
          "price": {
            "units": "usd", 
            "value": "18.500000"
          }, 
          "rate": {
            "frequency": "yearly", 
            "type": "triple_net"
          }, 
          "updated": "2016-07-02T10:16:40.570590+00:00"
        }, 
        "id": "1295036197629855209", 
        "relationships": {
          "organizations": {
            "links": {
              "related": "/leases/1295036197629855209/organizations"
            }
          }, 
          "spaces": {
            "links": {
              "related": "/leases/1295036197629855209/spaces/1295036197629855208"
            }
          }
        }, 
        "type": "leases"
      }, 
      "position": 3, 
      "space": {
        "attributes": {
          "created": "2015-03-09T01:07:34.168885+00:00", 
          "deleted": false, 
          "max_contiguous": {
            "units": "sqft", 
            "value": "1316.000000"
          }, 
          "min_divisible": {
            "units": "sqft", 
            "value": "1316.000000"
          }, 
          "space_size": {
            "units": "sqft", 
            "value": "1316.000000"
          }, 
          "unit_number": "C", 
          "updated": "2016-07-02T10:16:40.570590+00:00"
        }, 
        "id": "1295036197629855208", 
        "relationships": {
          "buildings": {
            "links": {
              "related": "/spaces/1295036197629855208/buildings/1295036123600389386"
            }
          }, 
          "leases": {
            "links": {
              "related": "/spaces/1295036197629855208/leases"
            }
          }
        }, 
        "type": "spaces"
      }
    }, 
    {
      "days_on_market": 326, 
      "listing": {
        "attributes": {
          "archived": false, 
          "created": "2015-03-09T01:07:34.168885+00:00", 
          "deleted": false, 
          "price": {
            "units": "usd", 
            "value": "18.500000"
          }, 
          "rate": {
            "frequency": "yearly", 
            "type": "triple_net"
          }, 
          "updated": "2016-07-02T10:16:40.570590+00:00"
        }, 
        "id": "1295036197629855209", 
        "relationships": {
          "organizations": {
            "links": {
              "related": "/leases/1295036197629855209/organizations"
            }
          }, 
          "spaces": {
            "links": {
              "related": "/leases/1295036197629855209/spaces/1295036197629855208"
            }
          }
        }, 
        "type": "leases"
      }, 
      "position": 4, 
      "space": {
        "attributes": {
          "created": "2015-03-09T01:07:34.168885+00:00", 
          "deleted": false, 
          "max_contiguous": {
            "units": "sqft", 
            "value": "1316.000000"
          }, 
          "min_divisible": {
            "units": "sqft", 
            "value": "1316.000000"
          }, 
          "space_size": {
            "units": "sqft", 
            "value": "1316.000000"
          }, 
          "unit_number": "C", 
          "updated": "2016-07-02T10:16:40.570590+00:00"
        }, 
        "id": "1295036197629855208", 
        "relationships": {
          "buildings": {
            "links": {
              "related": "/spaces/1295036197629855208/buildings/1295036123600389386"
            }
          }, 
          "leases": {
            "links": {
              "related": "/spaces/1295036197629855208/leases"
            }
          }
        }, 
        "type": "spaces"
      }
    }
  ];

export default gridData;