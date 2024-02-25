import type { Metadata } from 'next';
import News from './components/news/news';
export const metadata: Metadata = {
  title: 'AZƏRBAYCAN RESPUBLİKASI MALİYYƏ NAZİRLİYİ',
  description: 'Maliye nazirliyi',
};
export default function Home() {
  return (
    <div className="mt-3 w-[600px] bg-white">
      <div className="bg-gradient-to-r w-full from-blueClr to-tealClr">
        <p className="text-xs text-cyan-400 pt-2 pl-2">DQK emissiyası 2024-01-15</p>
        <ul className="flex mt-2 ml-2 pb-2">
          <li className="text-center pl-4 pr-4 pt-1 pb-4 text-sm">
            <p>ISIN kod</p>
            <p className="font-bold">AZ0101060017</p>
          </li>
          <li className="text-center pr-4 border-l-cyan-400 border-l pl-4 pt-1 pb-4 text-sm">
            <p>Tədavül müddəti</p>
            <p className="font-bold">364 gün</p>
          </li>
          <li className="text-center pr-4 border-l-cyan-400 border-l pl-4 pt-1 pb-4 text-sm">
            <p>Gəlirlik dərəcəsi</p>
            <p className="font-bold">6,7826%</p>
          </li>
          <li className="text-center pr-4 border-l-cyan-400 border-l pl-4 pt-1 pb-4 text-sm">
            <p>Emissiya həcmi</p>
            <p className="font-bold">89000000 AZN</p>
          </li>
        </ul>
      </div>
      <div className='flex h-16 items-center bg-xbBg mt-2 justify-between'>
        <p className='pl-2 text-2xl font-bold'>XƏBƏRLƏR</p>
        <p className='pr-2'>XƏBƏRLƏR ARXIVI</p>
      </div>
      <News date={"22.02.2024"} text={"2024-cü il 27 fevral tarixində aşağıdakı parametrli Azərbaycan Respublikası Maliyyə Nazirliyinin dövlət istiqrazlarının Bakı Fond Birjasında (BFB) yerləşdirilməsi üzrə hərrac keçiriləcəkdir."} header={"Maliyyə Nazirliyinin dövlət istiqrazları üzrə keçiriləcək hərrac barədə məlumat"} />
      <hr className='mt-4 mx-2' />
      <News date={"20.02.2024"}
        header={"Prezident İlham Əliyev Azərbaycan və BƏƏ Maliyyə nazirlikləri arasında əməkdaşlıq haqqında Anlaşma Memorandumunu təsdiqləyib"}
        text={"Fevralın 20-də Prezident İlham Əliyev 2024-cü il yanvarın 9-da Bakı şəhərində imzalanmış “Azərbaycan Respublikasının Maliyyə Nazirliyi ilə Birləşmiş Ərəb Əmirliklərinin Maliyyə Nazirliyi arasında əməkdaşlıq haqqında Anlaşma Memorandumu”nun təsdiq edilməsi barədə Fərman imzalayıb."} />
      <hr className='mt-4 mx-2' />
      <News date={"20.02.2024"}
        header={"Maliyyə Nazirliyinin dövlət istiqrazlarının yerləşdirilməsi barədə məlumat"}
        text={"2024-cü il 20 fevral tarixində “Bakı Fond Birjası” QSC-də Maliyyə Nazirliyinin AZ0201070049 ISIN kodlu, tədavül müddəti 728 gün olan dövlət istiqrazlarının yerləşdirilməsi üzrə hərrac keçirilib."} />
      <hr className='mt-4 mx-2' />
      </div>
  )
}
