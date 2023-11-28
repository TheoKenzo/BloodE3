import { BloodForm } from './bloodform';
import { Footer } from './footer';
import { RequisitesForm } from './requisitesform';
import { BloodBaseForm } from './bloodbaseform';

export function MainPage(){
    return(
        <div className='w-mp1 h-[90vw] flex flex-col justify-center items-center'>
            <main className="flex flex-col gap-y-6 p-8">
                <section className="w-mp1 h-80 flex bg-white rounded-2xl p-14 gap-x-48">
                    <BloodForm />   

                    <svg className='z-10' width="191" height="330" viewBox="0 0 191 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_26_42)">
                        <path d="M112.325 0.206299C112.325 0.206299 98.546 -3.12876 90.2068 17.0198C83.2575 33.8144 78.327 42.7832 83.9682 48.8755C85.9869 51.0549 88.8673 52.2294 91.8357 52.3299L123.595 53.3725C123.595 53.3725 135.255 22.8357 128.167 11.7942C121.079 0.746439 112.325 0.206299 112.325 0.206299Z" fill="#2F2E41"/>
                        <path d="M118.903 50.8351L103.627 55.8534V33.8898H117.488L118.903 50.8351Z" fill="#F6A6A9"/>
                        <path d="M107.181 316.98H92.867L84.5719 240.619H106.69L107.181 316.98Z" fill="#F6A6A9"/>
                        <path d="M78.9307 329.253C77.4276 329.253 76.0881 329.215 75.0756 329.121C71.2707 328.775 67.6483 325.974 65.8245 324.335C65.0069 323.6 64.7428 322.425 65.1705 321.414C65.4786 320.686 66.0886 320.146 66.8433 319.932L76.8868 317.068L93.15 306.108L93.3324 306.435C93.4016 306.554 94.999 309.431 95.5336 311.371C95.7348 312.112 95.6845 312.728 95.3763 313.199C95.1625 313.532 94.8669 313.72 94.6217 313.827C94.9172 314.135 95.8417 314.757 98.678 315.209C102.829 315.868 103.697 311.572 103.734 311.39L103.759 311.246L103.885 311.164C105.86 309.895 107.074 309.318 107.495 309.437C107.759 309.512 108.193 309.644 109.369 321.339C109.489 321.703 110.313 324.398 109.753 326.966C109.143 329.768 96.8983 328.8 94.4456 328.581C94.3764 328.587 85.2071 329.24 78.9244 329.24V329.253H78.9307Z" fill="#5C2C93"/>
                        <path d="M139.506 316.98H125.199L116.897 240.619H139.015L139.506 316.98Z" fill="#F6A6A9"/>
                        <path d="M111.262 329.253C109.759 329.253 108.42 329.215 107.407 329.121C103.602 328.775 99.9799 325.974 98.1561 324.335C97.3385 323.6 97.0743 322.425 97.502 321.414C97.8102 320.686 98.4202 320.146 99.1749 319.932L109.218 317.068L125.482 306.108L125.664 306.435C125.733 306.554 127.331 309.431 127.865 311.371C128.066 312.112 128.016 312.728 127.708 313.199C127.494 313.532 127.198 313.72 126.953 313.827C127.249 314.135 128.173 314.757 131.01 315.209C135.16 315.868 136.028 311.572 136.066 311.39L136.091 311.246L136.217 311.164C138.192 309.895 139.405 309.318 139.827 309.437C140.091 309.512 140.525 309.644 141.701 321.339C141.82 321.703 142.644 324.398 142.084 326.966C141.474 329.768 129.23 328.8 126.777 328.581C126.708 328.587 117.539 329.24 111.256 329.24V329.253H111.262Z" fill="#5C2C93"/>
                        <path d="M143.625 129.426H74.0945L99.0868 47.2802H126.809L143.625 129.426Z" fill="#883EDD"/>
                        <path d="M72.2015 175.52C71.3714 180.551 68.0131 184.162 64.6988 183.578C61.3845 182.994 59.3657 178.446 60.1959 173.416C60.4977 171.4 61.2964 169.497 62.5228 167.857L66.3087 146.584L76.6164 148.739L71.7864 169.478C72.4216 171.437 72.5663 173.51 72.2078 175.52L72.2015 175.52Z" fill="#F6A6A9"/>
                        <path d="M103.464 47.2928C103.464 47.2928 86.1945 46.8406 84.377 51.3752C82.5595 55.9162 61.2021 163.932 61.2021 163.932H75.2894L103.464 47.2928Z" fill="#883EDD"/>
                        <path d="M107.13 39.0776C115.539 39.0776 122.356 32.2698 122.356 23.872C122.356 15.4742 115.539 8.66638 107.13 8.66638C98.7216 8.66638 91.9048 15.4742 91.9048 23.872C91.9048 32.2698 98.7216 39.0776 107.13 39.0776Z" fill="#F6A6A9"/>
                        <path d="M109.52 5.22454C109.52 5.22454 89.9741 34.2603 93.2633 52.3738L81.8928 45.2578C81.8928 45.2578 89.8987 8.591 101.829 5.74584L109.52 5.21826L109.52 5.22454Z" fill="#2F2E41"/>
                        <path d="M129.173 129.426H83.5468L58.5796 231.757C58.1205 236.078 60.8625 240.11 65.0699 241.235C78.7672 244.896 111.633 250.091 161.385 235.632C166.171 234.244 168.888 229.201 167.385 224.453L129.173 129.432V129.426Z" fill="#2F2E41"/>
                        <path d="M67.6357 61.8514L67.3213 61.5374L67.0069 61.8514C51.7058 46.583 26.9084 46.6018 11.62 61.8828C-3.66849 77.1701 -3.97665 102.243 11.3244 117.511L67.359 173.416L123.356 117.442C138.644 102.155 138.324 77.0821 123.029 61.8137C107.728 46.5453 82.9305 46.5642 67.642 61.8451C67.642 61.8451 67.6357 61.8514 67.6357 61.8514Z" fill="#00CCFF"/>
                        <path d="M109.017 54.9678L121.658 48.4924C127.437 46.357 133.884 47.073 139.053 50.4331C154.776 60.6456 185.768 83.1619 172.448 94.2913C154.895 108.963 131.167 82.9421 131.167 82.9421L109.017 54.9678Z" fill="#883EDD"/>
                        <path d="M108.74 66.0344C104.344 63.4468 102.187 59.0126 103.929 56.1298C105.671 53.2532 110.646 53.0208 115.048 55.6085C116.822 56.6197 118.312 58.0517 119.394 59.7851L137.883 71.0025L132.148 79.8206L114.526 67.8244C112.463 67.7051 110.476 67.0896 108.734 66.0282H108.74L108.74 66.0344Z" fill="#F6A6A9"/>
                        <path d="M121.306 76.2029L126.563 63.6603L152.254 72.1518L140.764 91.2514L121.306 76.2029Z" fill="#883EDD"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_26_42">
                        <rect width="191" height="330" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </section>
                
                <section className='flex h-52 w-mp1 gap-x-6'>
                    <div className='h-full w-mp2 flex flex-col justify-center items-center p-14 gap-x-48 rounded-2xl text-white bg-mainPurpleColor'>
                        <h1 className='text-6xl font-bold'>1 = 4</h1>
                        <p className='font-semibold'>A cada doação sua, quatro pessoas vivem</p>
                    </div>

                    <div className='h-full w-mp3 flex flex-col justify-center items-center p-14 gap-x-48 rounded-2xl text-white bg-secondaryCyanColor'>
                        <h1 className='text-6xl font-bold'>+2.175</h1>
                        <p className='font-semibold'>Serviços de hemoterapia em todo país. A demanda por ajuda é muito alta</p>
                    </div>
                </section>

                <section className="w-mp1 h-[20.063rem] flex flex-col justify-center items-center gap-6 bg-white rounded-2xl p-14 gap-x-48">
                    <BloodBaseForm />
                </section>  

                <section className='flex h-[16.5rem] w-mp1 gap-x-6'>
                    <div className='h-full w-[34.688rem] flex flex-col justify-center items-center gap-3 rounded-2xl bg-white'>
                        <div className='flex flex-col w-[24.563rem] gap-6'>
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.4999 6.4183C11.4085 6.4183 2.41716 15.0551 2.41716 25.7092C2.41716 36.3632 11.4085 45 22.4999 45C33.5913 45 42.5827 36.3632 42.5827 25.7092C42.5827 15.0551 33.5913 6.4183 22.4999 6.4183ZM34.5159 37.2513C31.7359 39.9216 28.0781 41.5835 24.1656 41.9536C20.2531 42.3238 16.328 41.3794 13.0591 39.2813C9.7902 37.1833 7.37979 34.0614 6.23854 30.4476C5.0973 26.8337 5.29583 22.9516 6.80033 19.4627C8.30482 15.9737 11.0222 13.0938 14.4894 11.3136C17.9566 9.53339 21.9592 8.96307 25.8151 9.6998C29.671 10.4365 33.1417 12.4347 35.6357 15.3539C38.1298 18.2732 39.493 21.9327 39.493 25.7092C39.4991 27.8536 39.0624 29.9779 38.208 31.9591C37.3537 33.9403 36.0988 35.7391 34.5159 37.2513Z" fill="#323232"/>
                                <path d="M24.0448 13.8379H20.9551V26.4224L29.259 32.8035L31.1891 30.4861L24.0448 24.9959V13.8379Z" fill="#323232"/>
                                <path d="M14.6759 6.43575e-05L0 9.64542L1.74472 12.0949L16.4207 2.44952L14.6759 6.43575e-05Z" fill="#323232"/>
                                <path d="M30.3242 -2.25798e-05L28.5795 2.4494L43.2552 12.095L45 9.64558L30.3242 -2.25798e-05Z" fill="#323232"/>
                            </svg>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-4xl font-semibold'>Dia de folga!</h1>
                                <p className='text-base font-semibold'>Quando você entra no ciclo de ajuda, é recompensado por isso. Que tal um dia livre?</p>
                            </div>
                        </div>
                    </div>

                    <div className='h-full w-[35rem] flex flex-col justify-center items-center p-14 gap-x-48 rounded-2xl text-white bg-secondaryCyanColor'>
                        <div className='flex flex-col w-[24.563rem] gap-6'>
                            <svg width="64" height="46" viewBox="0 0 64 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.4 36.2667H36.3333C40.2748 36.2622 44.0536 34.6944 46.8407 31.9074C49.6278 29.1203 51.1955 25.3415 51.2 21.4V19.2H54.4C56.9461 19.2 59.3879 18.1886 61.1882 16.3882C62.9886 14.5879 64 12.1461 64 9.6C64 7.05392 62.9886 4.61212 61.1882 2.81177C59.3879 1.01143 56.9461 3.79395e-08 54.4 0H8.53333V21.4C8.53781 25.3415 10.1056 29.1203 12.8926 31.9074C15.6797 34.6944 19.4585 36.2622 23.4 36.2667ZM51.2 4.26667H54.4C55.8145 4.26667 57.171 4.82857 58.1712 5.82876C59.1714 6.82896 59.7333 8.18551 59.7333 9.6C59.7333 11.0145 59.1714 12.371 58.1712 13.3712C57.171 14.3714 55.8145 14.9333 54.4 14.9333H51.2V4.26667ZM12.8 4.26667H46.9333V21.4C46.9302 24.2103 45.8124 26.9047 43.8252 28.8919C41.838 30.8791 39.1437 31.9969 36.3333 32H23.4C20.5897 31.9969 17.8953 30.8791 15.9081 28.8919C13.9209 26.9047 12.8031 24.2103 12.8 21.4V4.26667Z" fill="#F2F2F2"/>
                                <path d="M64 41.6H0V45.8667H64V41.6Z" fill="#F2F2F2"/>
                            </svg>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-4xl font-semibold'>Comida de graça</h1>
                                <p className='text-base font-semibold'>Ao doar sangue, você ganha uma refeição gratuita do hemocentro. Uma mão lava a outra!</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-mp1 h-[25.313rem] flex gap-24 items-center bg-white rounded-2xl p-14 gap-x-48">
                    <svg width="304" height="294" viewBox="0 0 304 294" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_30_73)">
                            <path d="M71.5352 293.482C78.4586 293.482 84.0711 291.378 84.0711 288.782C84.0711 286.187 78.4586 284.082 71.5352 284.082C64.6119 284.082 58.9994 286.187 58.9994 288.782C58.9994 291.378 64.6119 293.482 71.5352 293.482Z" fill="#00CCFF"/>
                            <path d="M101.621 292.855C108.545 292.855 114.157 290.751 114.157 288.155C114.157 285.56 108.545 283.456 101.621 283.456C94.6979 283.456 89.0854 285.56 89.0854 288.155C89.0854 290.751 94.6979 292.855 101.621 292.855Z" fill="#00CCFF"/>
                            <path d="M141.562 213.864C153.408 207.037 161.273 198.489 159.129 194.771C156.985 191.053 145.644 193.574 133.798 200.401C121.952 207.228 114.087 215.776 116.23 219.494C118.374 223.212 129.715 220.691 141.562 213.864Z" fill="#00CCFF"/>
                            <path d="M130.441 230.604C134.822 203.618 116.49 178.192 89.4956 173.812C62.5015 169.433 37.0672 187.76 32.6866 214.746C28.3061 241.732 46.6381 267.159 73.6322 271.538C100.626 275.917 126.061 257.591 130.441 230.604Z" fill="#00CCFF"/>
                            <path d="M74.0424 261.525H58.9994V288.469H74.0424V261.525Z" fill="#00CCFF"/>
                            <path d="M104.128 261.525H89.0854V288.469H104.128V261.525Z" fill="#00CCFF"/>
                            <path d="M82.8175 227.061C92.164 227.061 99.7409 219.487 99.7409 210.143C99.7409 200.799 92.164 193.224 82.8175 193.224C73.4709 193.224 65.894 200.799 65.894 210.143C65.894 219.487 73.4709 227.061 82.8175 227.061Z" fill="#F2F2F2"/>
                            <path d="M82.8174 215.782C85.933 215.782 88.4586 213.257 88.4586 210.143C88.4586 207.028 85.933 204.503 82.8174 204.503C79.7019 204.503 77.1763 207.028 77.1763 210.143C77.1763 213.257 79.7019 215.782 82.8174 215.782Z" fill="#3F3D56"/>
                            <path d="M33.5311 176.64C29.5329 158.739 42.3137 140.651 62.0778 136.239C81.8419 131.827 101.105 142.762 105.103 160.663C109.102 178.564 96.0032 185.166 76.239 189.577C56.4749 193.989 37.5294 194.54 33.5311 176.64Z" fill="#883EDD"/>
                            <path d="M48.1615 210.312C50.001 206.435 41.4768 198.543 29.1223 192.685C16.7678 186.828 5.26133 185.222 3.42184 189.099C1.58234 192.977 10.1064 200.869 22.4609 206.726C34.8154 212.584 46.322 214.19 48.1615 210.312Z" fill="#00CCFF"/>
                            <path d="M57.2415 240.533C57.2415 245.378 69.72 254.945 83.5667 254.945C97.4134 254.945 110.396 241.305 110.396 236.46C110.396 231.616 97.4134 237.4 83.5667 237.4C69.72 237.4 57.2415 235.688 57.2415 240.533Z" fill="#F2F2F2"/>
                            <path d="M254.224 293.482C261.148 293.482 266.76 291.378 266.76 288.782C266.76 286.187 261.148 284.082 254.224 284.082C247.301 284.082 241.688 286.187 241.688 288.782C241.688 291.378 247.301 293.482 254.224 293.482Z" fill="#00CCFF"/>
                            <path d="M224.138 292.855C231.062 292.855 236.674 290.751 236.674 288.155C236.674 285.56 231.062 283.456 224.138 283.456C217.215 283.456 211.602 285.56 211.602 288.155C211.602 290.751 217.215 292.855 224.138 292.855Z" fill="#00CCFF"/>
                            <path d="M209.529 219.494C211.673 215.776 203.808 207.228 191.961 200.401C180.115 193.574 168.774 191.053 166.63 194.771C164.486 198.489 172.352 207.037 184.198 213.864C196.044 220.691 207.385 223.212 209.529 219.494Z" fill="#00CCFF"/>
                            <path d="M244.196 272.177C271.543 272.177 293.712 250.014 293.712 222.675C293.712 195.336 271.543 173.173 244.196 173.173C216.848 173.173 194.679 195.336 194.679 222.675C194.679 250.014 216.848 272.177 244.196 272.177Z" fill="#00CCFF"/>
                            <path d="M266.76 261.525H251.717V288.469H266.76V261.525Z" fill="#00CCFF"/>
                            <path d="M236.674 261.525H221.631V288.469H236.674V261.525Z" fill="#00CCFF"/>
                            <path d="M232.594 227.061C241.941 227.061 249.518 219.487 249.518 210.143C249.518 200.799 241.941 193.224 232.594 193.224C223.248 193.224 215.671 200.799 215.671 210.143C215.671 219.487 223.248 227.061 232.594 227.061Z" fill="#F2F2F2"/>
                            <path d="M228.517 211.817C230.727 209.609 230.741 206.041 228.548 203.847C226.355 201.652 222.786 201.663 220.576 203.871C218.365 206.079 218.351 209.647 220.544 211.841C222.737 214.036 226.306 214.025 228.517 211.817Z" fill="#3F3D56"/>
                            <path d="M249.521 189.577C229.756 185.166 216.658 178.563 220.656 160.663C224.654 142.762 243.918 131.827 263.682 136.239C283.446 140.651 296.227 158.739 292.228 176.64C288.23 194.54 269.285 193.989 249.521 189.577Z" fill="#883EDD"/>
                            <path d="M295.976 260.409C300.124 259.307 300.642 247.704 297.132 234.492C293.622 221.281 287.413 211.464 283.265 212.565C279.116 213.667 278.598 225.27 282.108 238.482C285.618 251.693 291.827 261.51 295.976 260.409Z" fill="#00CCFF"/>
                            <path d="M232.978 237.401C223.887 237.401 215.363 231.616 215.363 236.461C215.363 241.306 223.887 254.946 232.978 254.946C242.068 254.946 250.261 245.379 250.261 240.534C250.261 235.689 242.068 237.401 232.978 237.401Z" fill="#F2F2F2"/>
                            <path d="M168.985 140.599H164.588C160.649 140.594 156.872 139.028 154.087 136.243C151.301 133.459 149.734 129.683 149.73 125.745V122.055C149.73 112.913 151.462 105.259 154.88 99.3049C159.021 92.379 163.852 85.8895 169.3 79.9356C172.916 76.2998 176.198 72.3456 179.105 68.121C181.19 64.839 182.267 61.0175 182.201 57.1298C182.201 47.9598 176.225 43.5019 163.931 43.5019C157.111 43.579 150.335 44.5958 143.793 46.5236C141.27 47.2435 138.615 47.3683 136.035 46.888C133.456 46.4077 131.023 45.3356 128.929 43.7559C126.835 42.1762 125.136 40.1321 123.966 37.7845C122.795 35.4369 122.186 32.8499 122.186 30.227V22.7559C122.172 19.5397 123.091 16.3883 124.832 13.6838C126.573 10.9793 129.062 8.83782 131.996 7.51892C143.55 2.58976 156.01 0.13936 168.57 0.326136C181.728 0.326136 193.606 2.53571 203.875 6.89258C214.163 11.2596 222.291 17.4174 228.033 25.1956C233.758 32.9186 236.8 42.3007 236.697 51.9126C236.697 62.2343 233.879 71.2241 228.32 78.6324C222.821 85.9655 214.939 93.9934 204.892 102.494C199.599 106.895 194.583 111.62 189.873 116.64C186.83 119.916 184.68 123.917 183.628 128.262C183.042 131.718 181.249 134.854 178.568 137.113C175.887 139.372 172.491 140.607 168.985 140.599Z" fill="#883EDD"/>
                            <path d="M166.54 210.45H165.96C158.66 210.445 151.66 207.543 146.5 202.38C141.339 197.218 138.44 190.219 138.44 182.92C138.44 175.622 141.339 168.623 146.5 163.46C151.66 158.298 158.66 155.395 165.96 155.391H166.54C170.158 155.388 173.741 156.099 177.084 157.481C180.427 158.864 183.465 160.891 186.024 163.448C188.583 166.004 190.613 169.04 191.998 172.381C193.383 175.722 194.096 179.304 194.096 182.92C194.096 186.537 193.383 190.118 191.998 193.46C190.613 196.801 188.583 199.837 186.024 202.393C183.465 204.95 180.427 206.977 177.084 208.36C173.741 209.742 170.158 210.452 166.54 210.45Z" fill="#883EDD"/>
                        <path d="M57.1708 99.3327C61.2772 99.3327 64.6061 96.0048 64.6061 91.8996C64.6061 87.7945 61.2772 84.4665 57.1708 84.4665C53.0644 84.4665 49.7355 87.7945 49.7355 91.8996C49.7355 96.0048 53.0644 99.3327 57.1708 99.3327Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_30_73">
                                <rect width="304" height="294" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                    <RequisitesForm />
                </section>
            </main>

            <Footer />
        </div>
    )
}