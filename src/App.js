import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers =[{
  'id':1,
  'image': 'https://picsum.photos/64/64.jpg',
  'name': '최범서',
  'birthday':'994006',
  'gender':'남자',
  'job':'백수'
},
{
  'id':2,
  'image': 'https://picsum.photos/64/64.jpg',
  'name': '이범서',
  'birthday':'980406',
  'gender':'남자',
  'job':'개백수'
},
{
  'id':3,
  'image': 'https://picsum.photos/64/64.jpg',
  'name': '삼범서',
  'birthday':'00406',
  'gender':'여자',
  'job':'무백수'
}

]
function App() {
  return (
    <div>
      {
        customers.map(c=>{
          return (
            <Customer
            keu={c.id}
      id={c.id}
      image={c.image}
      name={c.name}
      birthday={c.birthday}
      gender={c.gender}
      job={c.job}
    />
          );
          
        })
      }
      
  
</div>

  )}

export default App;
