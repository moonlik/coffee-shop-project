import coffeeBeans from './assets/images/coffee-beans.png'

export default function Feature () {
    return (
        <div className="max-w-screen-2xl mx-auto py-28 bg-no-repeat bg-white bg-top text-brown-800" style={{"background-image": `url(${coffeeBeans})`}}>
            <div className="px-10 md:px-20 mb-20 max-w-4xl mx-auto">
                <h2 className="text-center text-3xl md:text-5xl font-thin font-serif md:leading-relaxed">Values</h2>
                <p className="text-center text-md md:text-lg font-light">Duis congue sapien non mauris tristique, eu porttitor arcu feugiat. Quisque sit amet quam sodales, porttitor lectus vitae, consectetur.</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                <hr class="absolute left-1/2 border-none bg-gradient-to-b from-white via-brown-400 to-white w-px h-full invisible sm:visible" />
                <div className="flex flex-col gap-6 sm:gap-0">
                    <div className="flex gap-6 float-left sm:w-1/2 bg-gradient-to-r from-yellow-50 p-6 rounded-l-3xl items-center">
                        <div className="w-1/5">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M415.94,37.792c-16.526,0-29.971,13.445-29.971,29.971c0,16.527,13.444,29.972,29.971,29.972    c16.526,0,29.971-13.445,29.971-29.972C445.911,51.237,432.466,37.792,415.94,37.792z M415.94,82.735    c-8.255,0-14.971-6.716-14.971-14.972c0-8.255,6.715-14.971,14.971-14.971c8.255,0,14.971,6.716,14.971,14.971    S424.195,82.735,415.94,82.735z"/>
                                <path d="M415.94,106.227c-16.526,0-29.971,13.445-29.971,29.971s13.444,29.971,29.971,29.971    c16.526,0,29.971-13.445,29.971-29.971S432.466,106.227,415.94,106.227z M415.94,151.169c-8.255,0-14.971-6.716-14.971-14.971    s6.715-14.971,14.971-14.971c8.255,0,14.971,6.716,14.971,14.971S424.195,151.169,415.94,151.169z"/>
                                <path d="M202.827,334.115h-96.901c-4.143,0-7.5,3.358-7.5,7.5v49.119c0,11.11,9.039,20.148,20.149,20.148h71.603    c11.11,0,20.149-9.039,20.149-20.148v-49.119C210.327,337.473,206.969,334.115,202.827,334.115z M195.327,390.734    c0,2.839-2.31,5.148-5.149,5.148h-71.603c-2.839,0-5.149-2.31-5.149-5.148v-41.619h81.901V390.734z"/>      
                                <path d="M494.939,184.942v-142.7C494.939,18.95,475.989,0,452.697,0h-310.27c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h310.27    c15.021,0,27.242,12.221,27.242,27.242v142.635H286.57v-17.539c0-17.927-14.584-32.511-32.511-32.511c0,0-178.775,0-178.776,0    c-9.655,0-17.511-7.855-17.511-17.511V32.511C57.772,22.855,65.628,15,75.283,15h37.144c4.142,0,7.5-3.358,7.5-7.5    s-3.358-7.5-7.5-7.5H75.283C57.357,0,42.772,14.584,42.772,32.511v84.805c0,15.345,10.689,28.231,25.011,31.628v11.383    c0,15.612,12.701,28.313,28.313,28.313h24.142v7.333l-58.49-7.251c-7.775-0.966-15.605,1.456-21.479,6.645    c-5.875,5.189-9.244,12.662-9.244,20.501c0,15.085,12.253,27.356,27.315,27.356c1.114,0,17.862-2.007,17.867-2.008l49.985-6.191    c6.155,8.988,16.49,14.9,28.183,14.9c18.824,0,34.138-15.314,34.138-34.138V188.64h24.142c15.612,0,28.313-12.702,28.313-28.314    v-10.5h13.09c9.655,0,17.511,7.855,17.511,17.511v17.604c-7.052,0.656-12.592,6.602-12.592,13.822v20.931    c0,5.216,2.894,9.764,7.156,12.138l22.8,154.144v28.421c0,6.687-5.44,12.127-12.127,12.127h-50.629    c9.136-9.188,14.792-21.841,14.792-35.792v-81.427c0-12.792-10.407-23.198-23.198-23.198h-24.418c-4.142,0-7.5,3.358-7.5,7.5    c0,4.142,3.358,7.5,7.5,7.5h24.418c4.521,0,8.198,3.678,8.198,8.198v81.427c0,19.736-16.056,35.792-35.791,35.792h-71.604    c-16.23,0-29.964-10.863-34.333-25.698c-0.959-3.271-1.458-6.684-1.458-10.093v-81.427c0-4.521,3.678-8.198,8.199-8.198h72.454    c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H90.982c-11.188,0-20.55,7.96-22.723,18.513H57.558    c-29.273,0-53.089,23.815-53.089,53.088s23.815,53.089,53.089,53.089h14.365c2.548,5.902,6.181,11.229,10.652,15.726H64.683v0.001    c-12.082,0-21.911,9.829-21.911,21.91v41.654c0,12.082,9.829,21.911,21.911,21.911h366.678c25.482,0,46.214-20.731,46.214-46.214    v-79.809l22.8-154.144c4.263-2.374,7.156-6.922,7.156-12.138v-20.931C507.531,191.543,501.991,185.598,494.939,184.942z     M67.787,227.148c0,0.001-7.87,0.979-7.871,0.979c-7.191,0.894-13.89-4.869-13.89-12.258c0-7.224,6.726-13.147,13.873-12.261    l7.888,0.98V227.148z M82.786,225.288V206.45l37.452,4.639c0.001,3.175-0.11,6.365,0.337,9.518L82.786,225.288z M173.514,215.788    c0,10.552-8.585,19.138-19.138,19.138c-7.795,0-14.505-4.691-17.485-11.393c-2.538-5.706-1.652-12.875-1.652-19.072v-15.82h38.275    V215.788z M225.969,160.327c0,7.341-5.972,13.313-13.313,13.313H96.096c-7.341,0-13.313-5.972-13.313-13.313v-10.501h143.186    V160.327z M57.558,395.799c-21.002,0-38.089-17.086-38.089-38.089c0-21.002,17.086-38.088,38.089-38.088h10.225v10.535H57.558    c-15.193,0-27.553,12.36-27.553,27.553c0,15.193,12.36,27.553,27.553,27.553h10.225v5.47c0,1.691,0.084,3.384,0.252,5.066H57.558z     M67.783,345.157v25.106H57.558c-6.922,0-12.553-5.631-12.553-12.553s5.631-12.553,12.553-12.553H67.783z M462.575,465.786    c0,17.211-14.002,31.214-31.214,31.214H64.683c-3.811,0-6.911-3.1-6.911-6.911v-41.654c0-3.811,3.1-6.91,6.911-6.91h212.124    c14.958,0,27.127-12.169,27.127-27.127v-21.474h158.641V465.786z M463.602,377.924H302.906l-21.35-144.341h203.396    L463.602,377.924z M492.531,218.583H273.978v-18.707h218.553V218.583z"/>
                                <path d="M458.87,244.272c0,0-150.513,0-151.228,0c-4.484,0-8.075,4.186-7.422,8.598l13.087,88.459    c1.766,11.945,12.204,20.953,24.279,20.953h91.338c12.073,0,22.511-9.007,24.278-20.95c0,0,13.078-88.402,13.087-88.463    C466.954,248.373,463.399,244.272,458.87,244.272z M438.365,339.136c-0.688,4.644-4.747,8.146-9.441,8.146h-91.338    c-4.695,0-8.753-3.502-9.44-8.146l-4.17-28.197c0.184-0.078,0.368-0.158,0.55-0.234c26.73-11.165,53.696,3.295,80.863,3.295    c12.726,0,25.541-2.016,37.599-6.111L438.365,339.136z M450.179,259.271l-4.655,31.472c-12.537,5.647-26.346,8.254-40.071,8.254    c-0.022,0-0.042,0.001-0.064,0.001c-19.467,0.001-37.852-8.082-57.294-8.181c-0.094,0-0.184-0.007-0.278-0.007    c-0.076,0-0.154,0.004-0.23,0.005c-8.805,0.057-17.574,1.667-25.796,4.834c-0.024,0.009-0.048,0.016-0.072,0.025l-5.388-36.404    L450.179,259.271L450.179,259.271z"/>
                            </svg>
                        </div>
                        <div className="w-4/5">
                            <h3 className="text-lg md:text-2xl font-medium mb-4 font-serif">Hand roasted coffee</h3>
                            <p>Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 self-end sm:w-1/2 bg-gradient-to-l from-yellow-50 p-6 rounded-r-3xl items-center">
                        <div className="w-4/5 text-right">
                            <h3 className="text-lg md:text-2xl font-medium mb-4 font-serif">Support local</h3>
                            <p>Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                        </div>
                        <div className="w-1/5">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M504.294,246.9c-0.571-1.858-1.842-3.422-3.543-4.361c-21.689-11.977-48.583-17.393-78.375-15.877 c5.968-15.512,9.574-31.428,10.558-47.16c2.264-36.199-9.52-67.152-33.183-87.158c-23.663-20.005-56.144-26.475-91.461-18.22    c-24.904,5.821-49.138,18.52-70.408,36.618c-1.377-2.054-2.808-4.077-4.305-6.043c-2.046-2.688-4.16-5.375-6.283-7.987    c-13.478-16.591-28.431-31.62-44.443-44.668c-3.21-2.617-7.935-2.135-10.551,1.076c-2.617,3.211-2.135,7.936,1.076,10.551    c15.219,12.403,29.443,26.701,42.278,42.5c2.023,2.49,4.039,5.052,5.989,7.614c1.785,2.345,3.479,4.768,5.064,7.245    c-1.019,1.012-2.029,2.04-3.03,3.078c-0.053,0.055-0.106,0.111-0.16,0.166c-17.256,17.89-31.301,39.011-40.596,62.088    c-0.312,0.771-0.626,1.541-0.928,2.316c-2.072-0.511-4.146-0.958-6.222-1.342L157.31,164.61    c4.956-7.891,19.067-33.2,18.264-64.458c-0.106-4.141-3.579-7.406-7.69-7.305c-4.141,0.106-7.412,3.549-7.305,7.69    c0.591,23.019-8.093,42.24-13.339,51.679l-26.735-32.909c5.362-9.214,15.715-30.457,15.054-56.213    c-0.106-4.141-3.554-7.412-7.69-7.305c-4.141,0.106-7.412,3.549-7.305,7.69c0.464,18.072-5.658,33.883-10.315,43.204L84.64,75.158    c-2.612-3.215-7.336-3.704-10.549-1.092c-3.215,2.612-3.704,7.335-1.092,10.549l25.628,31.546    c-10.041,2.657-26.723,5.406-44.417,1.227c-4.034-0.953-8.071,1.544-9.023,5.575s1.544,8.071,5.575,9.023    c7.811,1.845,15.411,2.554,22.482,2.554c15.624,0,28.654-3.46,35.623-5.774l26.736,32.908    c-10.313,3.203-30.904,7.766-53.317,2.472c-4.034-0.953-8.07,1.544-9.022,5.575s1.544,8.071,5.575,9.022    c8.516,2.011,16.809,2.785,24.537,2.785c19.901-0.001,36.008-5.131,42.297-7.46l9.386,11.553c-0.477,0.01-0.953,0.033-1.429,0.05    c-11.639,0.417-23.18,2.936-33.934,7.414c-15.306,6.372-28.794,16.588-39.897,30.085c-1.105-1.314-2.201-2.64-3.278-3.966    c-27.788-34.205-46.786-72.283-54.939-110.116c-7.478-34.7-4.884-66.759,7.273-90.712c34.686-9.384,78.618,0.816,121.125,28.25    c3.479,2.246,8.122,1.246,10.368-2.235c2.246-3.48,1.246-8.122-2.235-10.368C110.665,3.405,60.877-7.216,21.51,4.888    C19.652,5.459,18.09,6.73,17.15,8.43C-14.109,65.032,5.518,155.595,64.877,228.662c1.921,2.365,3.899,4.721,5.885,7.029    c-4.89,7.759-9.128,16.313-12.639,25.59c-13.757,36.347-14.712,79.61-2.689,121.823c12.021,42.208,35.629,78.473,66.473,102.114    c23.038,17.658,48.1,26.781,72.648,26.781c9.021,0,17.972-1.232,26.729-3.726c16.053-4.573,30.427-13.103,42.566-25.017    c17.791,12.381,37.855,19.319,58.436,20.104c30.436,1.162,58.384-12.694,81.511-31.482c20.457-16.619,38.661-35.198,54.106-55.22    c2.53-3.28,1.922-7.99-1.357-10.519s-7.989-1.922-10.519,1.357c-14.738,19.106-32.129,36.85-51.688,52.74    c-20.703,16.822-44.092,29.181-71.481,28.135c-17.129-0.654-33.914-6.296-48.969-16.398c6.838-8.778,12.706-18.851,17.465-30.078    c13.409,7.238,36.8,17.018,65.276,17.018c5.029,0,10.645-1.49,10.485-7.731c-0.106-4.141-3.543-7.416-7.69-7.305    c-28.209,0.726-51.652-9.989-62.833-16.236c0.807-2.566,1.555-5.16,2.241-7.783l30.883-25.09    c7.805,4.971,34.502,20.24,67.947,20.24c4.904,0,10.306-1.721,10.105-7.726c-0.106-4.141-3.569-7.402-7.69-7.305    c-26.211,0.674-47.945-9.53-58.002-15.252l37.322-30.32c9.486,5.583,31.804,16.702,59.148,16.702    c4.878,0,10.031-1.863,9.875-7.723c-0.106-4.141-3.546-7.411-7.69-7.305c-20.634,0.532-38.594-6.703-48.744-11.903l35.453-28.801    c3.215-2.612,3.704-7.335,1.092-10.549c-2.612-3.215-7.335-3.704-10.549-1.092l-35.475,28.819    c-2.475-8.983-5.201-23.373-3.474-39.416c0.213-0.217,0.426-0.434,0.638-0.651c14.437-14.768,26.693-31.805,35.881-50.31    c28.782-2.642,54.651,1.503,75.254,12.057c10.133,37.029-0.121,84.061-28.383,129.645c-2.183,3.52-1.099,8.144,2.422,10.325    c3.521,2.183,8.144,1.098,10.325-2.422C506.468,341.309,517.083,288.5,504.294,246.9z M196.683,192.334    c9.709-24.136,25.651-46.829,44.654-64.565c0.008-0.007,0.014-0.017,0.022-0.024c43.997-41.051,101.373-53.871,139.572-30.528    c-1.485,0.866-2.933,1.735-4.354,2.606c-0.11,0.067-0.223,0.135-0.333,0.202c-25.6,15.755-46.525,37.516-60.152,64.409    c-0.019,0.037-0.036,0.073-0.055,0.109c-15.241,30.467-24.839,63.704-46.198,90.843c-0.08,0.102-0.161,0.205-0.241,0.307    c-11.16-16.967-24.591-31.675-39.781-43.317c-10.804-8.281-22.054-14.683-33.486-19.149    C196.449,192.929,196.563,192.631,196.683,192.334z M211.835,495.177c-26.432,5.639-54.91-2.017-80.803-21.864    c-28.303-21.694-50.028-55.19-61.173-94.319c-15.061-52.88-7.478-105.161,16.282-139.333c0.081-0.104,0.168-0.202,0.245-0.311    c10.137-14.479,22.985-25.303,37.583-31.769c-0.015,0.215-0.022,0.421-0.036,0.636c-3.083,46.785,13.96,91.086,39.686,129.414    c27.231,40.573,45.578,86.353,47.862,135.517C211.82,480.485,211.928,487.833,211.835,495.177z M257.365,468.268    c-0.145,0.16-0.277,0.329-0.406,0.5c-8.696,9.513-18.828,16.839-30.093,21.647c0-6.185-0.144-12.371-0.45-18.549    c-1.283-25.901-5.872-51.332-14.913-75.685c-1.527-4.114-3.166-8.186-4.913-12.21c-8.325-19.192-18.875-37.343-30.517-54.698    c-14.742-21.974-28.865-44.762-34.333-71.024c-3.773-18.127-4.01-36.826-2.361-55.215c0.015-0.166,0.035-0.339,0.05-0.505    c0.196-0.043,0.392-0.09,0.588-0.132c14.814-3.133,30.077-1.94,44.475,2.612c55.761,17.628,90.938,76.388,101.507,130.896    C295.903,386.979,284.93,437.697,257.365,468.268z M303.21,396.977c2.286-18.359,1.874-37.595-1.24-56.946    c0.621-0.173,1.24-0.359,1.859-0.541c2.717-0.797,5.409-1.671,8.077-2.619c0.018,22.148,5.824,39.697,8.341,46.266L303.21,396.977    z M332.624,373.084c-2.705-8.44-6.57-24.137-5.536-42.508c0.021-0.256,2.215-1.08,2.441-1.192    c8.654-4.289,16.925-9.333,24.765-14.972c3.165-2.277,6.254-4.664,9.268-7.136c0.517,15.689,4.056,28.588,6.383,35.489    L332.624,373.084z M403.777,232.017c-14.342,30.633-37.495,57.443-66.08,75.592c-10.898,6.92-22.627,12.595-34.934,16.524    c-0.217,0.069-3.675,1.174-3.692,1.122c-2.25-9.699-5.138-19.249-8.667-28.56c-3.602-9.525-7.811-18.669-12.576-27.338    c0.124-0.148,0.242-0.295,0.364-0.443c25.528-30.715,35.564-69.65,54.63-104.028c0.067-0.121,0.134-0.241,0.202-0.361    c13.833-24.849,36.061-43.606,60.649-57.281c0.041-0.023,0.084-0.045,0.125-0.068C422.95,135.466,425.689,185.211,403.777,232.017    z"/>  
                            </svg>
                        </div>
                    </div>
                    <div className="flex gap-6 sm:w-1/2 bg-gradient-to-r from-yellow-50 p-6 rounded-l-3xl items-center">
                        <div className="w-1/5">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m239.896 69.819c0 9.85 3.836 19.111 10.801 26.076 2.929 2.93 7.678 2.929 10.607 0s2.929-7.678 0-10.606c-8.53-8.53-8.53-22.409 0-30.939 14.378-14.378 14.378-37.774 0-52.153-2.93-2.929-7.678-2.929-10.607 0s-2.929 7.678 0 10.606c8.53 8.53 8.53 22.41 0 30.94-6.966 6.965-10.801 16.226-10.801 26.076zm206.605 170.109c-8.624 0-17.007 1.645-24.921 4.89-9.75-22.785-26.419-43.393-48.229-59.617-3.322-2.472-8.021-1.782-10.494 1.541-2.473 3.324-1.782 8.022 1.541 10.494 19.813 14.738 34.876 33.368 43.559 53.874 3.103 7.329 11.633 10.785 19.024 7.707 6.186-2.581 12.753-3.889 19.521-3.889 27.845 0 50.498 22.462 50.498 50.072s-22.653 50.072-50.499 50.072c-13.415 0-26.049-5.17-35.575-14.557-5.605-5.521-14.724-5.521-20.329.001-9.523 9.387-22.157 14.556-35.574 14.556-14.824 0-28.845-6.428-38.467-17.636-2.778-3.235-6.803-5.091-11.043-5.091 0 0 0 0-.001 0-4.239 0-8.266 1.854-11.045 5.092-9.621 11.207-23.642 17.635-38.467 17.635s-28.846-6.428-38.468-17.637c-2.779-3.235-6.805-5.091-11.045-5.09-4.24 0-8.265 1.855-11.043 5.091-9.622 11.208-23.643 17.636-38.467 17.636-13.417 0-26.051-5.169-35.575-14.557-5.605-5.521-14.725-5.522-20.328.001-9.526 9.386-22.16 14.556-35.575 14.556-27.846 0-50.499-22.462-50.499-50.072s22.653-50.072 50.499-50.072c6.768 0 13.335 1.308 19.521 3.889 7.39 3.083 15.921-.379 19.023-7.707 22.315-52.701 83.382-88.11 151.957-88.11 27.933 0 55.443 5.923 79.557 17.129 3.759 1.747 8.217.116 9.963-3.641 1.745-3.756.115-8.216-3.641-9.962-26.081-12.12-55.777-18.526-85.879-18.526-74.328 0-140.796 38.889-165.58 96.817-7.914-3.245-16.297-4.89-24.921-4.89-36.116.001-65.499 29.192-65.499 65.073 0 30.205 20.824 55.665 48.957 62.966l35.715 99.36c9.602 26.721 35.128 44.674 63.518 44.674h44.567c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-44.567c-22.081 0-41.934-13.964-49.402-34.747l-33.136-92.185c17.153-.039 33.316-6.603 45.586-18.512 12.305 11.943 28.528 18.516 45.739 18.516 19.031 0 37.048-8.187 49.512-22.476 12.463 14.29 30.478 22.476 49.511 22.476 19.034 0 37.05-8.186 49.512-22.476 12.464 14.29 30.479 22.476 49.511 22.476 17.212 0 33.435-6.571 45.739-18.516 12.271 11.909 28.433 18.473 45.586 18.512l-33.137 92.186c-7.468 20.782-27.32 34.746-49.401 34.746h-136.052c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h136.052c28.391 0 53.916-17.953 63.518-44.673l35.716-99.361c28.132-7.301 48.956-32.761 48.956-62.966 0-35.881-29.383-65.072-65.499-65.072zm-150.805-136.224c2.929 2.929 7.677 2.928 10.606 0 2.93-2.929 2.93-7.677.001-10.606-5.471-5.471-5.471-14.373 0-19.844 11.318-11.319 11.318-29.737 0-41.057-2.929-2.929-7.678-2.93-10.606 0-2.93 2.929-2.93 7.677-.001 10.606 5.471 5.471 5.471 14.373 0 19.844-11.318 11.319-11.318 29.738 0 41.057zm-90 0c2.929 2.929 7.677 2.928 10.606 0 2.93-2.929 2.93-7.677.001-10.606-5.471-5.471-5.471-14.373 0-19.844 11.318-11.319 11.318-29.737 0-41.057-2.929-2.929-7.678-2.93-10.606 0-2.93 2.929-2.93 7.677-.001 10.606 5.471 5.471 5.471 14.373 0 19.844-11.318 11.319-11.318 29.738 0 41.057zm-71.041 158.141c3.252 3.252 7.66 4.81 12.716 4.81 9.984 0 22.493-6.077 33.599-17.184 7.208-7.208 12.666-15.47 15.367-23.265 3.329-9.606 2.267-17.793-2.992-23.051-9.674-9.673-29.585-4.356-46.315 12.375h.001c-7.208 7.208-12.666 15.47-15.367 23.265-3.33 9.605-2.268 17.792 2.991 23.05zm11.181-18.14c1.945-5.612 6.246-12.016 11.8-17.57h.001c9.828-9.829 18.938-12.896 23.033-12.896 1.028 0 1.74.193 2.068.521.493.493 1.002 2.983-.574 7.533-1.945 5.612-6.246 12.016-11.801 17.57-12.296 12.296-23.465 14.009-25.102 12.374-.492-.492-1.001-2.982.575-7.532zm86.164-11.205c0 23.659 10.317 41.5 24 41.5s24-17.841 24-41.5-10.317-41.5-24-41.5-24 17.841-24 41.5zm33 0c0 17.388-6.688 26.5-9 26.5s-9-9.112-9-26.5 6.688-26.5 9-26.5 9 9.112 9 26.5zm49.654-29.345c-5.258 5.258-6.32 13.444-2.991 23.051 2.701 7.795 8.159 16.057 15.366 23.265 11.107 11.107 23.614 17.185 33.6 17.184 5.055 0 9.465-1.559 12.717-4.81 5.258-5.258 6.32-13.444 2.991-23.051-2.701-7.795-8.159-16.057-15.366-23.265-16.73-16.73-36.639-22.048-46.317-12.374zm35.71 22.981c5.554 5.554 9.854 11.958 11.8 17.57 1.576 4.549 1.067 7.04.575 7.532-1.639 1.638-12.808-.079-25.104-12.374-5.554-5.554-9.854-11.958-11.8-17.57-1.576-4.549-1.067-7.04-.575-7.532.329-.329 1.041-.522 2.069-.522 4.097 0 13.207 3.067 23.035 12.896-.001 0-.001 0 0 0z"/></svg>
                        </div>
                        <div className="w-4/5">
                            <h3 className="text-lg md:text-2xl font-medium mb-4 font-serif">Freshly baked on demand</h3>
                            <p>Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 self-end sm:w-1/2 bg-gradient-to-l from-yellow-50 p-6 rounded-r-3xl items-center">
                        <div className="w-4/5 text-right">
                            <h3 className="text-lg md:text-2xl font-medium mb-4 font-serif">Eco-friendly package</h3>
                            <p>Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                        </div>
                        <div className="w-1/5">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="-50 0 512 512"><path d="m396.675781 46.253906h-24.890625l-6.914062-33.527344c-1.523438-7.375-8.09375-12.726562-15.621094-12.726562h-281.386719c-7.53125 0-14.101562 5.351562-15.621093 12.726562l-6.917969 33.527344h-24.890625c-10.992188 0-19.933594 8.941406-19.933594 19.933594v32.957031c0 10.992188 8.941406 19.9375 19.933594 19.9375h9.78125l5.542968 38.949219c-1.679687.96875-3.210937 2.207031-4.511718 3.703125-3.328125 3.839844-4.828125 8.925781-4.113282 13.960937l37.003907 259.988282c1.019531 7.171875 6.40625 12.859375 13.210937 14.539062l5.265625 37.015625c2.011719 14.117188 14.277344 24.761719 28.535157 24.761719h194.816406c14.257812 0 26.523437-10.644531 28.535156-24.761719l5.265625-37.015625c6.804687-1.679687 12.191406-7.367187 13.210937-14.539062l37.003907-259.988282c.714843-5.035156-.785157-10.121093-4.113281-13.960937-1.300782-1.496094-2.832032-2.734375-4.515626-3.703125l5.546876-38.949219h9.78125c10.992187 0 19.933593-8.945312 19.933593-19.9375v-32.957031c-.003906-10.992188-8.945312-19.933594-19.9375-19.933594zm-21.5625 127.324219-37.003906 259.988281c-.175781 1.234375-1.246094 2.160156-2.488281 2.160156h-71.847656c-4.144532 0-7.503907 3.359376-7.503907 7.507813s3.359375 7.507813 7.503907 7.507813h60.753906l-4.894532 34.382812c-.964843 6.761719-6.839843 11.863281-13.671874 11.863281h-194.8125c-6.832032 0-12.707032-5.101562-13.671876-11.863281l-4.890624-34.382812h136.253906c4.148437 0 7.507812-3.359376 7.507812-7.507813s-3.359375-7.507813-7.507812-7.507813h-147.351563c-1.242187 0-2.3125-.925781-2.488281-2.160156l-37.003906-259.988281c-.140625-.988281.308594-1.679687.589844-2.003906.269531-.308594.855468-.800781 1.769531-.847657.101562-.003906.199219-.011718.304687-.019531h327.789063c.101562.007813.203125.015625.304687.019531.914063.046876 1.5.539063 1.769532.847657.28125.324219.730468 1.015625.589843 2.003906zm-329.730469-54.496094h326.347657l-5.210938 36.613281h-315.925781zm356.214844-19.9375c0 2.714844-2.207031 4.921875-4.921875 4.921875h-376.242187c-2.710938 0-4.921875-2.207031-4.921875-4.921875v-32.957031c0-2.714844 2.210937-4.921875 4.921875-4.921875h67.175781c4.144531 0 7.503906-3.359375 7.503906-7.507813 0-4.144531-3.359375-7.503906-7.503906-7.503906h-26.953125l6.289062-30.492187c.089844-.433594.476563-.75.917969-.75h281.386719c.441406 0 .828125.316406.917969.75l6.289062 30.492187h-233.914062c-4.148438 0-7.507813 3.359375-7.507813 7.503906 0 4.148438 3.359375 7.507813 7.507813 7.507813h274.132812c2.714844 0 4.921875 2.207031 4.921875 4.921875zm0 0"/><path d="m265.023438 241.421875c-.050782-.050781-.105469-.097656-.160157-.148437-24.953125-24.695313-70.410156-19.570313-101.484375 11.507812-14.851562 14.847656-24.320312 33.40625-26.664062 52.257812-2.433594 19.546876 3.015625 37.097657 15.339844 49.421876 0 .003906.003906.003906.007812.007812.019531.019531.039062.039062.058594.054688 10.398437 10.363281 24.496094 15.84375 40.375 15.84375 2.933594 0 5.933594-.191407 8.976562-.566407 18.851563-2.34375 37.410156-11.816406 52.261719-26.664062 31.152344-31.15625 36.234375-76.769531 11.324219-101.679688-.011719-.015625-.023438-.023437-.035156-.035156zm-113.410157 65.46875c1.933594-15.550781 9.882813-30.996094 22.378907-43.496094 14.972656-14.972656 33.71875-22.863281 50.480468-22.863281 7.703125 0 14.980469 1.675781 21.285156 5.089844-12.605468 7.488281-32.179687 22.21875-38.132812 44.050781-5.179688 18.980469-33.28125 40.007813-48.703125 49.757813-6.28125-8.628907-8.875-19.957032-7.308594-32.539063zm91.503907 25.628906c-12.5 12.5-27.945313 20.445313-43.496094 22.378907-10.984375 1.367187-21.015625-.433594-29.128906-5.089844 15.480468-10.21875 45.132812-32.414063 51.617187-56.1875 5.292969-19.417969 26.214844-32.492188 35.769531-37.574219 14.859375 19.78125 8.875 52.832031-14.761718 76.472656zm0 0"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}