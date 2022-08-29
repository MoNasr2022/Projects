import MeetupDetail from "../../components/meetups/MeetupDetail";


function MeetupDetails(){
    return <MeetupDetail
    image ='https://scontent.frkh1-1.fna.fbcdn.net/v/t1.6435-9/169134209_513659276675338_6976168091508410233_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=TwNBxldplW0AX-K9wrp&tn=LpPvw-3JKWZM0rac&_nc_ht=scontent.frkh1-1.fna&oh=00_AT_YiX-gvZBN9kYnNfOgaQSJUbDUNSG7QJcRT9xECP_84w&oe=633009C3'
    title = 'First Meetup'
    adress= ' Some Street 5, 1555 city'
    description='This is a first meetup'
    />
}
export async function getStaticPaths(){
    return {
        fallback: false,
        paths:[
            {
                params:{
                    meetupId:'m1',
                },
            },
            {
                params:{
                    meetupId:'m2'
                }
            }
        ]
    }
}
export async function getStaticProps(context){
    //fetch data for a single meetup
    const meetupId = context.params.meetupid
    console.log(meetupId)
     return{
        props:{
            MeetupData:{
                id:meetupId,
                image:'https://scontent.frkh1-1.fna.fbcdn.net/v/t1.6435-9/169134209_513659276675338_6976168091508410233_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=TwNBxldplW0AX-K9wrp&tn=LpPvw-3JKWZM0rac&_nc_ht=scontent.frkh1-1.fna&oh=00_AT_YiX-gvZBN9kYnNfOgaQSJUbDUNSG7QJcRT9xECP_84w&oe=633009C3',
                title: 'First Meetup',
                adress: ' Some Street 5, 1555 city',
                description:'This is a first meetup'
            }
        }
    }
}

export default MeetupDetails;