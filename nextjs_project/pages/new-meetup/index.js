//our-domain.con/new-meetup
import Layout from '../../components/layout/Layout';
import NewMeetupForm from '../../components/meetups/NewMeetupForm'



function NewMeetupPage(){
  function addMeetupHanler(enteredMeetupData){
    console.log(enteredMeetupData)
  }

    return(
          <NewMeetupForm onAddMeetup ={addMeetupHanler}/>
    )
}


export default NewMeetupPage;