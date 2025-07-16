import JournalData from '@/Components/JournalData'
import { tabs, content } from '@/Json/internationalJournalData'

const InternationalJournal = () => {
  return (
    <JournalData tabs={tabs} content={content} />
  )
}

export default InternationalJournal