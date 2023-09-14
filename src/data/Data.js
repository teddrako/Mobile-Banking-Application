import { transactions } from './Transactions';
import { id } from './Id';
import { reloadProfiles, profiles } from './Profile';

let index = transactions.findIndex((profile) => profile.id === id.id);

let data = [
  {
    name: 'Food',
    amount: index === -1 ? 0 : transactions[index].transactions.filter((item) => item.type === 'Food').reduce((acc, curr) => acc + curr.amount, 0),
    color: '#43007a',
  },
  {
    name: 'Transport',
    amount: index === -1 ? 0 : transactions[index].transactions.filter((item) => item.type === 'Transport').reduce((acc, curr) => acc + curr.amount, 0),
    color: '#6f109e',
  },
  {
    name: 'Entertainment',
    amount: index === -1 ? 0 : transactions[index].transactions.filter((item) => item.type === 'Entertainment').reduce((acc, curr) => acc + curr.amount, 0),
    color: '#816b8c',
  },
  {
    name: 'Shopping',
    amount: index === -1 ? 0 : transactions[index].transactions.filter((item) => item.type === 'Shopping').reduce((acc, curr) => acc + curr.amount, 0),
    color: '#a495b4',
  },
  {
    name: 'Bills',
    amount: index === -1 ? 0 : transactions[index].transactions.filter((item) => item.type === 'Bills').reduce((acc, curr) => acc + curr.amount, 0),
    color: '#c9c1d9',
  },
  {
    name: 'Other',
    amount: index === -1 ? 0 : transactions[index].transactions.filter((item) => item.type === 'Other').reduce((acc, curr) => acc + curr.amount, 0),
    color: '#e3ddec',
  }
];

function fetchData() {
  data = [
    {
      name: 'Food',
      amount: index === -1 ? 0 : transactions[index].transactions.filter((item) => item.type === 'Food').reduce((acc, curr) => acc + curr.amount, 0),
      color: '#43007a',
    },
    {
      name: 'Transport',
      amount: index === -1 ? 0 : transactions[index].transactions.filter((item) => item.type === 'Transport').reduce((acc, curr) => acc + curr.amount, 0),
      color: '#6f109e',
    },
    {
      name: 'Entertainment',
      amount: index === -1 ? 0 : transactions[index].transactions.filter((item) => item.type === 'Entertainment').reduce((acc, curr) => acc + curr.amount, 0),
      color: '#816b8c',
    },
    {
      name: 'Shopping',
      amount: index === -1 ? 0 : transactions[index].transactions.filter((item) => item.type === 'Shopping').reduce((acc, curr) => acc + curr.amount, 0),
      color: '#a495b4',
    },
    {
      name: 'Bills',
      amount: index === -1 ? 0 : transactions[index].transactions.filter((item) => item.type === 'Bills').reduce((acc, curr) => acc + curr.amount, 0),
      color: '#c9c1d9',
    },
    {
      name: 'Other',
      amount: index === -1 ? 0 : transactions[index].transactions.filter((item) => item.type === 'Other').reduce((acc, curr) => acc + curr.amount, 0),
      color: '#e3ddec',
    }
  ];
};

function reloadData() {
  index = transactions.findIndex((profile) => profile.id === id.id);
  fetchData();
}

export { data, reloadData };