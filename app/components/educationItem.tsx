import Image from 'next/image'

export default function EducationItems() {
    
    return (
      <>
        <section className="experienceItem">
          <div className="itemContent">
            <div className="leftColumn">
              <h3 className="dateRange">2011</h3>
            </div>
            <div className="innerContent">
              <h3 className="title">BFA, Industrial + Product Design</h3>
              <h4 className="company">Rochester Institute of Technology (RIT)</h4>
            </div>
            <div className="rightColumn">
              <div className="companyLogo">
                <Image src="/rit.svg" alt="RIT Logo" width={200} height={200} style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>
        <section className="experienceItem">
          <div className="itemContent">
            <div className="leftColumn">
              <h3 className="dateRange">2024</h3>
            </div>
            <div className="innerContent">
              <h3 className="title">Design Research, Writing + Criticism</h3>
              <h4 className="company">School of Visual Arts (SVA)</h4>
            </div>
            <div className="rightColumn">
              <div className="companyLogo">
                <Image src="/sva.svg" alt="SVA Logo" width={200} height={200} style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </section>
      </>
    )
    
}