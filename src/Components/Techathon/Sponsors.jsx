const sponsorsList = [
  {
    imgName: "foxmula",
    link: "https://foxmula.com/",
  },
  {
    imgName: "groww",
    link: "https://groww.in/",
  },
  {
    imgName: "herody",
    link: "https://herody.in/",
  },
  {
    imgName: "green_horizon",
    link: "https://www.hotelgreenhorizon.com/",
    type: "png",
  },
  {
    imgName: "code_warriors",
    link: "https://codewarriors.in/",
  },
  {
    imgName: "Bluehill",
    link: "https://bluehillpublications.in/",
  },
  {
    imgName: "Floxus",
    link: "https://floxus.co/",
  },
  {
    imgName: "institute_of_engg",
    link: "https://ieijscjharkhand.org/",
  },
  {
    imgName: "TechieNest",
    link: "https://techienest.in/",
  },
];

export default function Sponsors() {
  return (
    <section>
      <h1 style={{ marginLeft: "3%" }}>Sponsors</h1>
      <div className="row sponsor-images">
        {sponsorsList.map((item, index) => {
          return (
            <div className="sponsor">
              <a href={item.link}>
                <img
                 className="sponsor-image"
                  src={`images/sponsors/${item.imgName}.${
                    item.type ? item.type : "jpg"
                  }`}
                  alt={item.imgName}
                />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
{
  /*<div
              className="col-lg-2 col-md-3 col-sm-4"
              style={{ textAlign: "center" }}
              key={index}
            >

            </div>*/
}
