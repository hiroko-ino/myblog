import Link from 'next/link'

import styled from './Pagination.module.scss'

function Pagination({posts, currentNum}) {
  const getLists = (posts, currentNum) => {
    const list = []
    for (let i = 0; i <= Math.floor(posts.length / 10); i++) {
      list.push(<li key={i + 1}
        className={[styled.item, currentNum === i + 1 && styled.is_active].join(' ')}>
          {currentNum === i + 1 ?
            i + 1 :
            <Link href={`/blog/page/${i + 1}`}><a className={styled.link}>{i + 1}</a></Link>}</li>
      );
    }
    return list;
  }

  const lists = getLists(posts, currentNum);

  return (
    <div className={styled.pagination}>
      <ul className={styled.list}>
        {lists}
      </ul>
    </div>
  )
}

export default Pagination
