import styles from '@/components/SearchModal/SearchModal.module.scss'
import CloseIcon from '@/assets/icons/CloseIcon.svg'
import clsx from 'clsx'
import SearchIcon from '@/assets/icons/SearchIcon.svg'
import TEXT from '@/constants/text.constant'

type SearchModalProps = {
    isOpen: boolean
    toggleSearch: (isOpen: boolean) => void
}

const SearchModal = ({ isOpen, toggleSearch }: SearchModalProps) => {
    return (
        <div className={clsx(styles.modal, { [styles.open]: isOpen })}>
            <div className={styles.heading}>
                <button onClick={() => toggleSearch(false)} className='icon-button-wrapper'>
                    <CloseIcon className={styles.closeIcon} />
                </button>
                <h2>{TEXT.SEARCH_MODAL.title}</h2>
            </div>
            <div className={styles.inputWrapper}>
                <SearchIcon className={styles.searchIcon} />
                <input type="text" placeholder={TEXT.SEARCH_MODAL.placeholder} className={styles.input} />
            </div>
        </div>
    )
}
export default SearchModal