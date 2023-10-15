import React, { Component } from 'react';
// import styled from 'styled-components';
// import { useGlobalContext } from '../context';

export default class Song extends Component {
    render() {
        const { artist_img, title, artist } = this.props.song;
        return (
            <>
                <div>
                    <div className='card me-4 mb-3'>
                        <div className='img-container'>
                            <img src={artist_img} className='card-img-top' />
                            <button className='play-btn'>
                                <span className='icon-span'>
                                    <i className='fas fa-play-circle fa-2x' />
                                </span>
                            </button>
                        </div>
                        <div className='card-footer d-flex justify-content-center'>
                            <p className='align-self-center mb-0'>{title} - </p>
                            <h5 className='text-blue font-italic mb-0'>{artist}</h5>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

// const Wrapper = styled.div`
//   .card {
//     border: 1px solid red;
//     width: 15rem;
//     height: 13rem;
//     border-color: transparent;
//     transition: all 0.5 linear;
//   }
//   .card-footer {
//     background: transparent;
//     border-top: transparent;
//     transition: all 0.5s linear;
//   }
//   &:hover {
//     .card {
//       border: 0.04rem solid rgba(0, 0, 0, 0.2);
//       box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
//     }
//     .card-footer {
//       background: rgba(247, 247, 247);
//     }
//   }
//   .img-container {
//     width: 15rem;
//     height: 15rem;
//     position: relative;
//     overflow: hidden;
//   }
//   .card-img-top {
//     transition: all 1s linear;
//     width: 100%;
//     height: 100%;
//   }
//   .img-container:hover .card-img-top {
//     transform: scale(1.1);
//   }
//   .icon-span {
//     color: #6df;
//   }
//   .play-btn {
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     padding: 0.2rem 0.4rem;
//     background: var(--lightBlue);
//     border: none;
//     color: var(--mainWhite);
//     font-size: 1.3rem;
//     border-radius: 0.3rem 0 0 0;
//     // transform: translate(100%, 100%);
//     opacity: 0%;
//     transition: all 0.5s linear;
//   }
//   .img-container:hover .play-btn {
//     transform: translate(0, 0);
//     opacity: 100%;
//   }
//   .play-btn:hover {
//     color: var(--mainBlue);
//     cursor: pointer;
//   }
// `;
