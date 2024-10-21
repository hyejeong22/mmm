import React from 'react'
import styles from './ProfileCard.module.css'

const ProfileCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <img src="/images/h.png" alt="Profile" className={styles.profileImage} />
      <h1 className={styles.name}>김혜정</h1>
      <div className={styles.info}>
        <div className={styles.moreInfo}>
          <h2>More information</h2>
          <p>이름: 김혜정</p>
          <p>생일: 2002.10.04</p>
          <p>핸드폰: 010-****-****</p>
          <p>이메일: *****@naver.com</p>
        </div>
        <div className={styles.education}>
          <h2>Educational History</h2>
          <p>2021 ~ 중부대학교 경찰행정학전공</p>
          <p>2024 ~ 중부대학교 정보보호학 복수전공</p>
        </div>
      </div>
      <div className={styles.hobbyVideoContainer}>
        <div className={styles.hobby}>
          <h2>Hobby</h2>
          <p>요리</p>
          <p>운동</p>
          <p>사진 찍기</p>
          <p>트리사냥</p>
        </div>
        <div className={styles.video}>
          <video width="400" controls>
            <source src="/video/m.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
