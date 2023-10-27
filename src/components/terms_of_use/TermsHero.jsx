import React from 'react'
import terms from "../../assets/terms_of_use/termsHero.jpg"
import logo from '../../assets/Hurlingham_logo.png'
import TermsNavBar from './TermsNavBar'

function TermsHero() {
  return (
    <div className='h-[3050px]  w-full pl-[50px] pr-[50px] bg-zinc-100 text-lg'>
      <TermsNavBar/>
        <div className='w-full '>
            <img src={terms} alt="hero" className='h-[500px] w-[1400px] pt-[30px]' />

            <div className='w-[1000px] ml-[150px] h-[850px]'>            
                <h2 className=' text-3xl mt-[30px] text-slate-700'>HURLINGHAM TERMS OF USE</h2>
                <h3 className=' text-lg text-left mt-[20px] text-slate-700'> <span className='flex justify-center'>TERMS OF USE</span> <br />
                The Hurlingham Club is committed to prioritising the well-being of all children and young 
                people at risk by promoting safeguarding at all times, including sporting and social events
                as well as the Hurlingham Crèche. The Club strives to minimise risk, deliver a safe and fun 
                experience for everyone, and respond appropriately to all safeguarding concerns/disclosures. <br /> <br />
                As a family Club, primary responsibility for children on site lies with the parent or guardian. 
                This includes instances such as when members who are known to each other arrange between themselves 
                to transport their children to events at the Club. However, under certain circumstances, this 
                responsibility will transfer to a suitable member of staff or volunteer of the Club. Examples 
                of children’s activities where this would apply would include sports coaching sessions, sports 
                camps, the Club’s overnight “Camp Out” or a Young Hurlingham event. The Club has specific 
                procedures to manage the transfer of responsibility in these scenarios. <br /> <br />
                It is the policy of the Club to maintain the highest standards and to work within the principles
                of Ofsted guidelines for all children’s activities, in particular with respect to staffing 
                ratios and qualifications of all those working with children. The Club aims to provide all 
                children and young people with appropriate safety and protection whilst in the care of the Club, 
                and to allow all staff and volunteers to make informed and confident responses to safeguarding 
                issues. <br /> <br />
                Any person working with children in the name of the Club must adhere to this Safeguarding Policy, 
                the Code of Conduct for Working with Children and all Club Bye-Laws relating to children.
                For the purposes of this document, a child is defined as any person under the age of 18 in 
                line with the Children Act 1989. Staff are defined as employees, casual workers and/or self 
                employed individuals/companies engaged by the Club to provide activities for children. Volunteers 
                are non-professional ‘helpers’ and will usually be members of the Club. 
                </h3> 
                <h2 className=' text-3xl mt-[30px] text-slate-700'>
                HURLINGHAM CLUB PROCEDURES</h2>
                <h3 className=' text-left text-lg mt-[20px] text-slate-700'> 
                Disclosure and Barring Service (DBS) Checks <br /> <br />
                As an organisation using the DBS to assess applicants’ suitability for positions of trust, 
                the Club complies fully with the DBS Code of Practice and undertakes to treat all applicants 
                for positions fairly. It undertakes not to discriminate unfairly against any subject of a 
                Disclosure on the basis of conviction or other information revealed. <br /> <br />
                A Disclosure is only requested after a thorough risk assessment has indicated that one is 
                both proportionate and relevant to the position concerned. Unless the nature of the position 
                allows the Club to ask questions about an entire criminal record, the Club will only ask about 
                “unspent” convictions as defined in the Rehabilitation of Offenders Act 1974. As such, the level 
                of DBS check requested will correlate directly with the role in question. <br /> <br />
                The Club strives to repeat DBS checks every three years. The dates of checks are recorded and 
                held by the Club’s HR Department. DBS disclosures are not held by the Club. <br />
                </h3>
                <h2 className=' text-3xl mt-[30px] text-slate-700'>
                VOLUNTEER INFORMATION </h2>
                <h3 className=' text-left text-lg mt-[20px] text-slate-700'> 
                Volunteers are usually Club members and are therefore not necessarily subject to the procedures 
                detailed above; however volunteers are subject to DBS checks when fulfilling a role which the 
                Club deems to require such a check. As with staff members, the Club strives to repeat these 
                checks every three years. All volunteers will be informed if this requirement is relevant when 
                any volunteer work is discussed.  <br />
                </h3>
                <h2 className=' text-3xl mt-[30px] text-slate-700'>
                PHOTOGRAPHY AND OTHER MEDIA</h2>
                <h3 className=' text-left text-lg mt-[20px] text-slate-700'> 
                It is likely that photographs or videos will be taken at many of the Club’s events and activities.
                The Club may use these images, for example on its website, social media streams and in printed 
                publications or other marketing materials. Parents and guardians will be made aware of the 
                possibility of images being recorded and will be asked to contact the Communications team if 
                they do not wish their child to be included.<br />
                </h3>
                <h2 className=' text-3xl mt-[30px] text-slate-700'>
                REPORTING CONCERNS </h2>
                <h3 className=' text-left text-lg mt-[20px] text-slate-700'> 
                It is not the responsibility of anyone working in the Club to decide whether or not child abuse 
                has taken place. However, there is a responsibility for all staff, volunteers, Committee members, 
                coaches and Club members working with children in the name of the Club, to act on any concerns 
                through contact with the appropriate authorities. <br /> <br />
                The Club will assure all staff/volunteers that it will fully support and protect anyone who in
                good faith reports his/her concern that a child is being abused, or a colleague, volunteer or 
                other person is, or may be, abusing a child. Every effort will be made to ensure that 
                confidentiality is maintained for all concerned. Information will be handled and disseminated 
                on a need to know basis only. <br /><br />
                Incidents that must be Reported/Recorded 
                If any of the following occur you should report this immediately to another colleague and record 
                the incident in writing giving a copy to your manager. You should also ensure the parents of the 
                child are informed: <br />
                • If you accidentally hurt a child. <br />
                • If a child seems distressed in any manner. <br />
                • If a child appears to be sexually aroused by your actions. <br />
                • If a child misunderstands or misinterprets something you have done. .<br />
                </h3>

                <h2 className=' text-3xl mt-[30px] text-slate-700'>
                WHO TO CONTACT</h2>
                <h3 className=' text-left text-lg mt-[20px] text-slate-700'> 
                If you have any concerns about poor practice or suspected abuse, please contact the Designated
                Safeguarding Officer in the first instance. This is Victoria Harris, Deputy Secretary 
                – 020 7610 7415, 07500 893814 or victoria.harris@hurlinghamclub.org.uk <br /> <br />
                If you are worried about sharing concerns regarding abuse with the Club’s Designated Safeguarding 
                Officer, you can contact the following people: <br /> <br />
                • Local Authority Designated Officer (LADO) – 020 8753 5125 or LADO@lbhf.co.uk   <br />
                • NSPCC Helpline – 0808 800 5000 <br />
                • Childline – 0800 1111 <br />
                • The police in an emergency - 999<br /><br />
                </h3>
                
            </div>
            
            <div className="h-[140px] w-[140px] bg-gray-100 rounded-full absolute top-[3080px] left-[600px]">
              <img className=" bottom-[5px] left-[200px] w-[250px]  p-[20px]" src={logo} alt="logo" />
            </div>
        </div>
        
    </div>
  )
}

export default TermsHero