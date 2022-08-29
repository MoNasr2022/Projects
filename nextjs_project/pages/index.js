

import Meetuplist from "../components/meetups/MeetupList";
import Layout from '../components/layout/Layout'

const DUMMY_MEETUPS =[
  {
    id :'m1',
    title:' A First Meetup',
    image:'https://scontent.frkh1-1.fna.fbcdn.net/v/t1.6435-9/169134209_513659276675338_6976168091508410233_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=TwNBxldplW0AX-K9wrp&tn=LpPvw-3JKWZM0rac&_nc_ht=scontent.frkh1-1.fna&oh=00_AT_YiX-gvZBN9kYnNfOgaQSJUbDUNSG7QJcRT9xECP_84w&oe=633009C3',
    address:'Some address 5, 12345 Some City',
    description: 'This is a first meetup'

  },
  {
     id :'m2',
    title:' A Second Meetup',
    image:'https://images.unsplash.com/photo-1661607542080-9c723b4dee5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    address:'Some address 46, 1327 Some City',
    description: 'This is a second meetup'
  }
]

function HomePage(props){

  return(
    <Meetuplist meetups={props.meetups}/>
  )

}

// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;
//   //fetch data from an API
//   return{
//     props:{
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }



export async function getStaticProps(){  //this function is only excuted during the build process
  //
  return{
    props:{          //it has to be  named props
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1                    //it will be regenerated every 10 sec if there is request
  }
}
export default HomePage;
