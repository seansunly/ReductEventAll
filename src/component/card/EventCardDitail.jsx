import React from 'react'

export default function EventCardDitail({ slug, title, img, about, date, description }) {
  //console.log("test description ",description)
  return (
    <div>
      <section className="flex justify-center bg-slate-100 md:p-2 rounded-3xl ">
        <div className="max-w-[1000px] w-full  sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px]">
          <h3 className="mb-5 mt-5 text-xl md:text-2xl ">
            sdfghjkl
            {/* មិត្តហ្វូនរៀបចំព្រឹត្តិការណ៍ "រត់ដើម្បីជីវិតកាន់តែប្រសើរ"
            សម្រាប់សហគមន៍ */}{title}
          </h3>
          <p className="mb-5 text-base md:text-lg">
            {/* ព្រឹត្តិការណ៍រត់ម៉ារ៉ាតុង "BIDC & Metfone
            រត់ដើម្បីជីវិតកាន់តែប្រសើរឆ្នាំ ២០២៤" បានចាប់ផ្តើមជាផ្លូវការនៅ
            បុរីប៉េង ហួត នៅថ្ងៃទី ២៣ ខែមិថុនា
            ក្នុងគោលបំណងនាំមកនូវគុណតម្លៃវិជ្ជមានដល់សហគមន៍.
            ព្រឹត្តិការណ៍នេះសហការរៀបចំដោយ ធនាគារ BIDC និងក្រុមហ៊ុនមិត្តហ្វូន. */}{description}
          </p>
          <div className="md:flex md:justify-center">
            <img
              src={img}
              alt=""
              className="w-full rounded-md mb-5 xl:max-w-full "
            />
          </div>
        </div>
      </section>
    </div>
  );
}
