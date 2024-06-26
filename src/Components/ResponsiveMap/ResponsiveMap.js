import React, { useState, useEffect } from 'react';
import './ResponsiveMap.css';

const ResponsiveMap = () => {
    const [infoData, setInfoData] = useState('');

    let countries_data = [

        {
            country: "KE",
            country_name: "Kenya",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Nairobi",
            law: "Kenya Data Protection Act, 2019",
            authority: "Office of the Data Protection Commissioner",
            enforcement: "Penalty Notice and Fines",
            penalties: "4M",
            currency: "Kenya Shilings",
            url: "/law"

        },
        {
            country: "UG",
            country_name: "Uganda",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Kampala",
            law: "Uganda Data Protection Act, 2019",
            authority: "Office of the Data Protection Commissioner",
            enforcement: "Penalty Notice and Fines",
            penalties: "10M",
            currency: "Uganda Shilings",
            url: "/law"

        },
        {
            country: "DZ",
            country_name: "Algeria",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Algiers",
            law: "Algeria Data Protection Act, 2019",
            authority: "Office of the Data Protection Commissioner",
            enforcement: "Penalty Notice and Fines",
            penalties: "200K",
            currency: "Dinar",
            url: "/law"

        },
        {
            country: "EG",
            country_name: "Egypt",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Cairo",
            law: "Egypt Data Protection Act, 2019",
            authority: "Office of the Data Protection Commissioner",
            enforcement: "Penalty Notice and Fines",
            currency: "Egyptian Pound",
            url: "/law"

        },
        {
            country: "TN",
            country_name: "Tunisia",
            data_protection: 'draft',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Tunis",
            law: "Tunis Data Protection Act, 2019",
            authority: "Office of the Data Protection Commissioner",
            enforcement: "Penalty Notice and Fines",
            currency: "Uganda Shillings",
            url: "/law"

        },
        {
            country: "TZ",
            country_name: "Tanzania",
            data_protection: 'draft',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Arusha",
            law: "Tanzania Data Protection Act, 2019",
            authority: "Office of the Data Protection Commissioner",
            enforcement: "Penalty Notice and Fines",
            currency: "Tanzania Shiling",
            penalties: "8M",
            url: "/law"

        },
        {
            country: "AO",
            country_name: "Angola",
            data_protection: 'draft',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Luanda",
            law: "Angola Data Protection Act, 2019",
            authority: "Office of the Data Protection Commissioner",
            enforcement: "Penalty Notice and Fines",
            currency: "New Kwanza",
            url: "/law"

        },
        {
            country: "BI",
            country_name: "Burundi",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Bujumbura",
            law: "Burundi Data Protection Act, 2019",
            authority: "Office of the Data Protection Commissioner",
            enforcement: "Penalty Notice and Fines",
            currency: "Burundi Franc",
            url: "/law"

        },
        {
            country: "BJ",
            country_name: "Benin",
            data_protection: 'draft',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Porto Novo",
            currency: "Franc",
            url: "/law"

        },
        {
            country: "BF",
            country_name: "Burkina Faso",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Ouagadougou",
            currency: "Burkina Faso Franc",
            url: "/law"

        },
        {
            country: "BW",
            country_name: "Botswana",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Gaborone",
            currency: "Pula",
            url: "/law"

        },
        {
            country: "CF",
            country_name: "Central African Rep.",
            data_protection: 'no law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Bangui",
            currency: "Franc",
            url: "/law"

        },
        {
            country: "CI",
            country_name: "Côte d'Ivoire",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Yamoussoukro",
            currency: "Franc",
            url: "/law"

        },
        {
            country: "CM",
            country_name: "Cameroon",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Yaoundé",
            currency: "Franc",
            url: "/law"

        },
        {
            country: "CD",
            country_name: "Dem. Rep. Congo",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Kinshasa",
            currency: "Congolese franc",
            url: "/law"

        },
        {
            country: "CG",
            country_name: "Congo",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Brazzaville",
            currency: "Franc",
            url: "/law"

        },
        {
            country: "DJ",
            country_name: "Djibouti",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Djibouti",
            currency: "Djibouti Franc",
            url: "/law"

        },
        {
            country: "ER",
            country_name: "Eritrea",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Asmara",
            currency: "Eritrean Nakfa",
            url: "/law"

        },
        {
            country: "ET",
            country_name: "Ethiopia",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Addis Ababa",
            currency: "Birr",
            url: "/law"

        },
        {
            country: "GA",
            country_name: "Gabon",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Libreville",
            currency: "Franc",
            url: "/law"

        },
        {
            country: "GH",
            country_name: "Ghana",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Accra",
            currency: "Cedi",
            url: "/law"

        },
        {
            country: "GN",
            country_name: "Guinea",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Conakry",
            currency: "Guinea Franc",
            url: "/law"

        },
        {
            country: "GM",
            country_name: "Gambia",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Banjul",
            currency: "Dalasi",
            url: "/law"

        },
        {
            country: "GW",
            country_name: "Guinea-Bissau",
            data_protection: 'draft',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Bissau",
            currency: "Guinea-Bissau Peso",
            url: "/law"

        },
        {
            country: "GQ",
            country_name: "Eq. Guinea",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Malabo",
            currency: "Franc",
            url: "/law"

        },
        {
            country: "LR",
            country_name: "Liberia",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Monrovia",
            currency: "Liberian Dollar",
            url: "/law"

        },
        {
            country: "LY",
            country_name: "Libya",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Tripoli",
            currency: "Libyan Dinar",
            url: "/law"
        },
        {
            country: "LS",
            country_name: "Lesotho",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Maseru",
            currency: "Loti",
            url: "/law"
        },
        {
            country: "MA",
            country_name: "Morocco",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Rabat",
            currency: "Moroccan Dirham",
            url: "/law"
        },
        {
            country: "MG",
            country_name: "Madagascar",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Antananarivo",
            currency: "Malagasy Franc",
            url: "/law"
        },
        {
            country: "ML",
            country_name: "Mali",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Bamako",
            currency: "Malian Franc",
            url: "/law"
        },
        {
            country: "MZ",
            country_name: "Mozambique",
            data_protection: 'no law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Maputo",
            currency: "Metical",
            url: "/law"
        },
        {
            country: "MR",
            country_name: "Mauritania",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Nouakchott",
            currency: "Ouguiya",
            url: "/law"
        },
        {
            country: "MW",
            country_name: "Malawi",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Lilongwe",
            currency: "Malawian Kwacha",
            url: "/law"
        },
        {
            country: "NA",
            country_name: "Namibia",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Windhoek",
            currency: "Namibian Dollar and Rand",
            url: "/law"
        },
        {
            country: "NE",
            country_name: "Niger",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Windhoek",
            currency: "Namibian Dollar and Rand",
            url: "/law"
        },
        {
            country: "NG",
            country_name: "Nigeria",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Abuja",
            currency: "Naira",
            url: "/law"
        },
        {
            country: "RW",
            country_name: "Rwanda",
            data_protection: 'draft',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Kigali",
            currency: "Rwandan Franc",
            url: "/law"
        },
        {
            country: "EH",
            country_name: "W. Sahara",
            data_protection: 'no law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "No Data",
            currency: "No data",
            url: "/law"
        },
        {
            country: "SD",
            country_name: "Sudan",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Khartoum",
            currency: "Sudanese pound",
            url: "/law"
        },
        {
            country: "SS",
            country_name: "South Sudan",
            data_protection: 'no law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Khartoum",
            currency: "Sudanese pound",
            url: "/law"
        },
        {
            country: "SN",
            country_name: "Senegal",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Dakar",
            currency: "West African CFA franc",
            url: "/law"
        },
        {
            country: "SL",
            country_name: "Sierra Leone",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Freetown",
            currency: "Sierra Leonean leone",
            url: "/law"
        },
        {
            country: "SZ",
            country_name: "Swaziland",
            data_protection: 'draft',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Lilangeni",
            currency: "Mbabane (administrative), Lobamba (legislative)",
            url: "/law"
        },
        {
            country: "TD",
            country_name: "Chad",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "N’Djamena",
            currency: "Central African CFA franc",
            url: "/law"
        },
        {
            country: "TG",
            country_name: "Togo",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Lomé",
            currency: "Central African CFA franc",
            url: "/law"
        },
        {
            country: "ZA",
            country_name: "South Africa",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Pretoria (administrative), Bloemfontein (judicial), Cape Town (legislative)",
            currency: "South African rand",
            url: "/law"
        },
        {
            country: "ZM",
            country_name: "Zambia",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Lusaka",
            currency: "Zambian kwacha",
            url: "/law"
        },
        {
            country: "ZW",
            country_name: "Zimbabwe",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Harare",
            currency: "Zimbabwean dollar",
            url: "/law"
        },
        {
            country: "SO",
            country_name: "Somalia",
            data_protection: 'law',
            data_protection_level: 'Independant authority and law(s)',
            capital_city: "Mogadishu",
            currency: "Somali shilling",
            url: "/law"
        }
    ]

    useEffect(() => {
        const handlePathClick = (event) => {
            const country = countries_data.find(item => item.country === event.target.id);
            window.location.href = country.url;

        };

        const paths = document.querySelectorAll('path[id]');
        paths.forEach((path) => {
            path.addEventListener('click', handlePathClick);
        });

        return () => {
            paths.forEach((path) => {
                path.removeEventListener('click', handlePathClick);
            });
        };
    }, []);

    const handlePathHover = (event) => {
        const country = countries_data.find(item => item.country === event.target.id);

        setInfoData(country);

        return '#f8f8f8';
    };

    const handleMouseLeave = (event) => {
        console.log('we have left: ' + event.target.id);

        setInfoData({
            country: "KE",
            country_name: "Kenya",
            data_protection: '10 law  and 44 draft',
            data_protection_level: 'Independent authority and law(s)',
            capital_city: "Nairobi",
            law: "Kenya Data Protection Act, 2019",
            authority: "Office of the Data Protection Commissioner",
            enforcement: "Penalty Notice and Fines",
            penalties: "4M",
            currency: "Kenya Shilling"
        }); // Clear the information on mouse leave

    };

    const getPathFillColor = (id) => {
        const country = countries_data.find(item => item.country === id);
        if (country === undefined) {
            return '#4CBEE4';

        }
        if (country !== undefined && country.data_protection === 'no law') {
            return 'red';
        }

        if (country !== undefined && country.data_protection === 'law') {
            return 'green';
        }

        if (country !== undefined && country.data_protection === 'draft') {
            return 'orange';
        }
    };

    return (
        <div className='map_container'>
            <div id="map" className='map'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1001 1000"
                    fill='#fffff'
                    version="1.1"
                    id="svg2">
                    <path id="AO" fill={getPathFillColor("AO")} data-name="Angola" data-id="AO" d="m495.3 598.6-36-.2-4.3 1.7-3.5-.3-5.1 1.9-1.1 2.7 6 8.7 2.4 9.3 3.6 13.4-3.8 5.5-.6 2.8 2.9 8.3 3.1 8.4 3.6 5 .6 7.8-1.4 10.3-4 6.1-7.1 9.1-2.9 5.6-4.1 12.5-.8 5.9-4.3 12.7-1.9 12.2 1 8.7 5.9-2.7 7.2-2.3 7.8.4 7.1 6.3 1.9-1 48.8-.6 8.2 6.6 29.1 2 22.4-5.7-7.6-8.6-7.8-11.3 1.6-44 25.3.1-1-4.7 2-5.2-2-6.5 1.5-6.7-1.2-4.3-5.5-.8-7.6 2-5.3-.3-3 1.3.9-16.5-3.9-5.1-.8-8.5 1.9-8.4-2.4-5.3-.1-8.7-14.8.1 1.1-5-6.2.1-.7 2.4-7.6.5-3.1 8.1-1.9 3.4-6.7-1.9-4 1.9-8.1 1.1-4.6-7.2-2.7-4.5-3.5-8.3-2.9-10.3zm-47.4-2.7.4-6 2-3.5 4.5-2.9-4.6-4.8-3.7 2.3-5 6 3.3 10.4 3.1-1.5z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="BI" fill={getPathFillColor("BI")} data-name="Burundi" data-id="BI" d="m669 556.1-.6-5.4-6.5-.9-3.8 7.9-7.4-1.1 3 6.3.1 2.4 4.3 13.2v.6l1.2-.2 4.5-5 4.9-7.2 3-2.9-.1-4.5-2.6-3.2z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="BJ" fill={getPathFillColor("BJ")} data-name="Benin" data-id="BJ" d="m340 356-9.3-8-4.3.1-4.1 4-2.6 4.2-6 1.2-2.5 6.1-4.1 1.6-1.6 7.2 3.7 4.1 4.3 4.9.4 6.8 2.5 2.8-.5 31.8 3 9.5 10.1-1.6.6-22.3-.3-8.8 2.3-8.7 3.7-4.3 5.9-8.5-1.3-3.7 2.4-5.6-2.8-8.2.5-4.6z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="BF" fill={getPathFillColor("BF")} data-name="Burkina Faso" data-id="BF" d="M300.7 310.8h-7.8l-3-2.6-6.7 1.9-11.3 5.8-2.3 4.3-9.4 6.2-1.7 3.6-5.1 2.8-5.8-1.9-3.4 3.4-1.8 9.5-9.7 11.4.3 4.7-3.4 5.9.8 8 5.5 3 2.1 4.6 5.4 2.9 4.3-3.4 5.7-.6 8.3 3.6-1.6-10.4.3-7.9 21.1-.6 5.4 1 3.9-2.2 5.6 1.1 10.7.3 4.1-1.6 2.5-6.1 6-1.2 2.6-4.2.3-9.5-14-3.1-.4-6.7-6.9-9-1.6-6.3 1-6.7z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="BW" fill={getPathFillColor("BW")} data-name="Botswana" data-id="BW" d="m600.6 762.7-2.2-1-6.9 3.1h-3.6l-7.9 5.4-4.4-5.7-18.7 4.9-9 .4-1.9 49.3-11.8.5-1.4 40.4 3.2 2 6.5 13.2-1.5 8.4 2.5 4.9 8.5-1.4 6.2-6.2 5.8-4.2 3.2-6.6 6-3.2 4.9 1.7 5.5 3.9 9.6.6 7.8-3.2 1.4-4.3 2.4-6.6 6.5-1.1 3.9-5.2 4.4-9.3 11.2-10.3 17.3-10.2-7.3-6.2-9.2-2.1-3.1-8.8.2-4.9-5.1-1.5-13-15.2-3.5-8-2.3-2.4-4.2-11.1z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="CF" fill={getPathFillColor("CF")} data-name="Central African Rep." data-id="CF" d="m587 398.1-1-.7-4.2-4-.9-4.3 1.9-5.7-.1-5.7-7.2-8.6-1.5-5.9-7.7 2.3-6 5.6-8.6 15.1-11.3 6.4-11.8-.8-3.4 1.2 1.2 4.9-6.3 4.8-5.1 5.4-15.3 5.3-3-3.1-2.1-.3-2.2 3.6-10 1-6.1 14-2.9 2.6-.8 10.7 1.2 5.8-.9 4.1 5.8 7.3 1 4.9 4.6 7.2 5.6 4.4.6 6.3 1.3 4 6.3-12.8 7.3-7.4 8.2 2.4 7.9.7 1-9.6 4.7-7.1 6.5-4.4 10.1 4.7 7.8 5.1 9 1.4 9.1 2.7 3.6-8.4 1.6-1.1 5.6 1.4 13.5-6.9 4.9 3 3.9-.5 1.8-3.3 4.5-1.2 9.2 1.4 7.9.4 4-1.5-2-4.4-9.2-5.5-3.2-8.3-5.2-6-8.3-7.2-.1-4.5-6.8-5.5-8.4-5.4z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="CI" fill={getPathFillColor("CI")} data-name="Côte d'Ivoire" data-id="CI" d="m230.4 373.8-5 2.1-2.9 1.7-1.8-5.9-3.5 1.6-2.1-.3-2.3 4-9.4-.1-3.3-2.1-1.6 1.3-2.5 1.1-1 4.7 2.8 5.7 3 11.1-4.6 1.6-1.1 1.9.9 2.7-.8 6.1h-1.9l-.6 4 1.2 6.7-2.7 6.1 3.6 3.8 3.8.9 5.2 5.8.3 5.5-1.1 1.7-1 11.4 2.3.4 12.1-5.1 8.5-4 14.5-2.4 7.8-.2 8.5 2.7 5.6-.1.5-5.5-5.2-11.9 3.2-15.6 5.1-11.6-3.2-19.7-8.3-3.6-5.7.6-4.3 3.4-5.4-2.9-2.1-4.6-5.5-3z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="CM" fill={getPathFillColor("CM")} data-name="Cameroon" data-id="CM" d="m477.5 366.6.4-9.2-1-9.1-4.9-8.9-3.4.8-.4 4.4 4.9 5.5-1.3 2.5-.5 4.6-10.2 10.7-3.1 8.8-1.6 7.2-2.6 3.1-2.4 9.7-6.4 5.7-1.9 7-2.7 5.6-1.1 5.7-8.3 4.7-6.9-5.7-4.6.2-7.2 8.1-3.6.1-5.7 13.4-3.1 9.8-.1 3.8 3.1 2 2.5 6.2 5.6 2.3 4.8 9.2-1.8 10.9 19.9.3 5.8-.9 7.4 1.9 7.3-1.8 1.5.7 15.4.6 9.9 3.6 9.7 3.3.9-7.5-1.3-4-.6-6.3-5.6-4.4-4.6-7.2-1-4.9-5.8-7.3.9-4.1-1.2-5.8.8-10.7 2.9-2.6 6.1-14 1.8-3.7-3.9-9.6-1.8-5.7-5.3-2.3-7.2-8.1 2.5-6.5 5.6 1.3 3.4-.9 6.8.1-6.8-12.6z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="CD" fill={getPathFillColor("CD")} data-name="Dem. Rep. Congo" data-id="CD" d="m618.3 446-9.2-1.4-4.5 1.2-1.8 3.3-3.9.5-4.9-3-13.5 6.9-5.6-1.4-1.6 1.1-3.6 8.4-9.1-2.7-9-1.4-7.8-5.1-10.1-4.7-6.5 4.4-4.7 7.1-1 9.6-.7 8.4-3.6 7.4-2.4 8.6-1.5 12.3.7 7.8-2 4.8-.3 5.1-1.4 4.4-8.1 6.7-5.6 7.1-5.3 13.4.3 11.4-3.1 4.4-7.2 6.8-7.2 8.7-4.5-2.5-.8-3.9-6.6-.1-4.2 5.3-3.2-1.4-4.5 2.9-2 3.5-.4 6-3.1 1.5 1.6 4.3 5.1-1.9 3.5.3 4.3-1.7 36 .2 2.9 10.3 3.5 8.3 2.7 4.5 4.6 7.2 8.1-1.1 4-1.9 6.7 1.9 1.9-3.4 3.1-8.1 7.6-.5.7-2.4 6.2-.1-1.1 5 14.8-.1.1 8.7 2.4 5.3-1.9 8.4.8 8.5 3.9 5.1-.9 16.5 3-1.3 5.3.3 7.6-2 5.5.8 4.2.3.6 4.3 5.7-.3 7.7 1.3 3.9 6.2 9.7 2 7.5-4.4 2.6 7.3 9.2 1.9 4.3 5.9 4.8 7.6 9.3.1-.6-14.9-3.4 2.5-8.4-5.4-3.2-2.4 1.9-13.9 2.5-16.4-2.6-6.1 3.6-8.8 3.3-1.7 16.4-2.3 2.1.6.6-2.3-3.4-3.7-1.5-7.6-7.3-7.6-4.1-9.9 2.3-5.8-3.2-7.8 2.4-22.1.1.2-.1-2.4-3-6.3 1.2-7.6 1.7-1 .5-8.3 3.5-3.8.1-10.5 2.9-5.3.6-11.1 2.6-6.4 4.6-7.2 4.7-3.7 3.9-4.9-4.9-1.9.6-16.1-10.9-9.2-2.9-5.9-6.8 2.9-5.7-.9-3.2 2.3-5.5-1.7-7.5-11.4-4 1.5-7.9-.4z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="CG" fill={getPathFillColor("CG")} data-name="Congo" data-id="CG" d="m521.5 468.8-7.9-.7-8.2-2.4-7.3 7.4-6.3 12.8-.9 7.5-9.7-3.3-9.9-3.6-15.4-.6-.9 6.1 3.4 7.1 9.1-1.1 3.1 2.7-5.3 16.1 5.8 8.2 1.3 10.8-1.6 9.2-3.7 6.5-10.8-.6-6.5-6.6-1 6.1-8.3 1.7-4.2 3.5 4.6 9.1-9.3 7.7 9.9 14.6 5-6 3.7-2.3 4.6 4.8 3.2 1.4 4.2-5.3 6.6.1.8 3.9 4.5 2.5 7.2-8.7 7.2-6.8 3.1-4.4-.3-11.4 5.3-13.4 5.6-7.1 8.1-6.7 1.4-4.4.3-5.1 2-4.8-.7-7.8 1.5-12.3 2.4-8.6 3.6-7.4.7-8.4z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="DJ" fill={getPathFillColor("DJ")} data-name="Djibouti" data-id="DJ" d="m820.3 358.7-5.3-3.8 6.8-3.3.1-5.7-3-4.3-3.6 3.4-5.2-1.2-4 6.1-3.9 6.5 1.1 3.8.3 4.2 6.8.2 2.9-.9 2.8 2.4 4.2-7.4z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="DZ" fill={getPathFillColor("DZ")} data-name="Algeria" data-id="DZ" d="m392.4 5.7-7.8.8-4.8-3.2-12.2.1L357 8.9l-5.8-2.1L332.3 8l-19.4 2.5-11 4.3-7.2 5.8-12.4 2.4-11.1 7.7 4.2 9 .7 8.4 3.9 14.7 3.1 2.9-2.2 5.4-15.2 2.3-5.4 5.1-6.7 1.2-.6 10.2-13.8 5.4-4.6 7-9.6 3.7-11.8 2.1-19.2 10.2-.2 16.3v1l-.3 2.7 44.1 33.5 40 30.2 40.4 30.2 2.9 6.4 7.5 4 5.5 2.2.2 8.8 13.3-1.3 16.9-6.2 34.5-27.1 40.5-26.4-5.4-8.7-9.6-6.4-5.5 2.5-4.3-7.7-.6-5.9-7.2-10.1 4.6-5.8-1.3-8.7 1.4-7.6-1-6.3 1.8-11.3-.8-6.4-4.1-12.2-5.7-24.7-7.3-5.6-.2-3.3-9.7-8.3-1.3-10.4 7-7.8 2.4-11.6-2.3-13.4 2.2-7.2z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="EG" fill={getPathFillColor("EG")} data-name="Egypt" data-id="EG" d="m628.8 88.1-11.9-4-11.5-3.7-15.6.2-3.7 6.6 2.2 5.9-2.4 8.5 4.2 11.2L593 162l2.2 50.9h141.9l-2.2-2.8-14.7-12.4-.9-9 2.2-2.4-11.6-15.3-4.4-7.9-4.9-7.5-10.5-21.6-8.4-13.9-6.1-14.5 1.1-1.3 10.1 19.8 5.8 6.2 4.3 4.4 2.5-2.4 2.7-7.2 1.6-10.4 2.8-5.6-1.5-3.5-8.5-20.1-5.4 3.4-9.2-.8-9.6-3.2-2.3 4.5-3.8-6.8-8.5-1.8-10.2 1.2-4.5 3.9-8.6 4.4-5.6-2.2z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="ER" fill={getPathFillColor("ER")} data-name="Eritrea" data-id="ER" d="m777.6 303.8-7-6.8-4-12.7-7.8-16-5.7 7.9-8.8 2.3-3.6 4.2-.7 9.2-4.3 20.3 1.5 5.6 14.3 2.9 3.3-10.4 7.6 6.3 7-3.2 3 2.9 8.3.1 10.8 5.6 3.4 4.8 5.5 4.4 5.4 8.1 4.3 4.5 5.2 1.2 3.6-3.4-6.2-4.2-4-4.7-6.9-8-7.1-7.9-17.1-13z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="ET" fill={getPathFillColor("ET")} data-name="Ethiopia" data-id="ET" d="m754.8 310.3-3.3 10.4-14.3-2.9-1.4 11.9-4.5 13.6-7.1 6.8-4.8 10.6-1.1 5.7-5.6 3.8-3.3 14.5.1 1.7.4 10.8-1.8 4.2-6.4.3-4 7.9 7.5 1 6.3 6.7 2.2 5.6 5.7 3.2 7.4 15 6.4 2.4.1 7.7 4.2 4.6h8.5l15.7 11.7 3.8.2 2.9-.4 2.7 1.6 8.2 1.1 3.5-5.8 11.1-5.8 4.9 4.7h8.4l3.3-4.4 7.8-.2 10.7-9.8 15.9-.6 33.5-41.5-10.3.1-40.3-16.4-4.8-5-4.6-6.6-4.8-7.7 2.5-4.9-2.8-2.4-2.9.9-6.8-.2-.3-4.2-1.1-3.8 3.9-6.5 4-6.1-4.3-4.5-5.4-8.1-5.5-4.4-3.4-4.8-10.8-5.6-8.3-.1-3-2.9-7 3.2-7.6-6.3z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="GA" fill={getPathFillColor("GA")} data-name="Gabon" data-id="GA" d="m455.9 485.9-1.5-.7-7.3 1.8-7.4-1.9-5.8.9.1 16.7-17.7-.2-4.2.8-2.4 10.3-3 10.1-2.7 4.4-.3 4.6L411 547l8.1 11.4 12.5 14 9.3-7.7-4.6-9.1 4.2-3.5 8.3-1.7 1-6.1 6.5 6.6 10.8.6 3.7-6.5 1.6-9.2-1.3-10.8-5.8-8.2 5.3-16.1-3.1-2.7-9.1 1.1-3.4-7.1.9-6.1z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="GH" fill={getPathFillColor("GH")} data-name="Ghana" data-id="GH" d="m296.4 364.9-5.6-1.1-3.9 2.2-5.4-1-21.1.6-.3 7.9 1.6 10.4 3.2 19.7-5.1 11.6-3.2 15.6 5.2 11.9-.5 5.5 10.9 3.9 11-4 6.7-4.7 19.2-8.1-2.8-4.9-3.2-8.8-1-6.8 2.7-12.5-3-5-1.2-10.9v-10.1l-5.1-7.1.9-4.3z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="GN" fill={getPathFillColor("GN")} data-name="Guinea" data-id="GN" d="m156.4 345.2-1.8.7-6.6-1.1-.9 1.6-2.7.3-8.7-3.4-5.8-.1-.3 4.7-1.3 1.4.9 4.6-1.9 1.8-2.7.1-3.2 2.3-3.7-.3-5.5 6.8 3.6 2.2 1.7 3.1 1.3 6.1 3 2.7 3.1 1.8 4.7 5.4 5.3 8.2 6.5-6.1 1.5-3.8 2.1-3 3.3-.3 2.9-2.6h9.7l3.3 5 2.6 5.8-.4 4 1.9 3.6-.1 5.1 3.3-.8 2.6-.3 3.2-1.6 5.1 8.5-.9 5.6 2.4 2.9 3.4.1 2.6-5.6 3.4.4h1.9l.8-6.1-.9-2.7 1.1-1.9 4.6-1.6-3-11.1-2.8-5.7 1-4.7 2.5-1.1-3.7-4 .7-4.1-1.6-1.6-2.6 1.3.6-4.5 2.5-3.5-5-5.8-1.4-3.8-2.7-3.1-2.4-.3-2.9 1.9-4 1.8-3.3 3-5.2-1.1-3.3-3.5-2-.4-3.2 1.8h-2l-.6-5z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="GM" fill={getPathFillColor("GM")} data-name="Gambia" data-id="GM" d="m91.9 335.4 11 .2 3-1.9 2.2-.1 4.5-3.2 5.2 2.9 5.2.3 5.3-3.1-2.4-4-4 2.3-3.8-.1-4.7-3.4-3.8.2-2.8 3.3-13.2.4-1.7 6.2z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="GW" fill={getPathFillColor("GW")} data-name="Guinea-Bissau" data-id="GW" d="m129.9 343.2-22.4-.6-3.3 1.6-4-.5-6.5 2.3.7 2.9 3.7 3-.1 2.1 2.7 3.9 5.1.9 6.4 5.8 5.5-6.8 3.7.3 3.2-2.3 2.7-.1 1.9-1.8-.9-4.6 1.3-1.4.3-4.7z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="GQ" fill={getPathFillColor("GQ")} data-name="Eq. Guinea" data-id="GQ" d="m433.9 486-19.9-.3-4.1 15.5 2.2 2.1 4.2-.8 17.7.2-.1-16.7z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="KE" fill={getPathFillColor("KE")} data-name="Kenya" data-id="KE" d="M807.2 463.1h-8.4l-4.9-4.7-11.1 5.8-3.5 5.8-8.2-1.1-2.7-1.6-2.9.4-3.8-.2-15.7-11.7h-8.5l-4.2-4.6-.1-7.7-6.4-2.4-8.1 9.1-7.4 8.3 5.9 9.6 1.5 7 5.5 15.8-4.4 10.1-5.9 9.2-3.5 5.6v.7l2.9 5.2-.8 10.3 44.1 28.2.7 8 17.3 13.8 5-4.6 2.5-9.2 4-5.5 1.9-9.8 4.6-1 3.1-5.8 8.6-5.5-7.2-11.4-.4-50.4 10.5-15.7z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="LR" fill={getPathFillColor("LR")} data-name="Liberia" data-id="LR" d="m193.3 411-3.4-.4-2.6 5.6-3.4-.1-2.4-2.9.9-5.6-5.1-8.5-3.2 1.6-2.6.3-5.7 6.5-5.5 7.5-.7 4-2.9 4.4 8.1 8.9 10.4 7.6 11 10.5 12.6 6.6 3.2-.1 1-11.4 1.1-1.7-.3-5.5-5.2-5.8-3.8-.9-3.6-3.8 2.7-6.1-1.2-6.7.6-4z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="LY" fill={getPathFillColor("LY")} data-name="Libya" data-id="LY" d="m589.8 80.6-3.1-4.5-11.7-1.6-3.9-2.4h-4.4l-4.4-6.2-15.9-2.8-7.9 1.8-7.9 6.5-3.3 6.7 3.4 10.6-5.3 6.3-5.5 3.6-12.9-6.9-16.7-5.7-10.6-2.7-6.1-12.3-15.7-6.1-9.8-2.3-4.8 1.2-13.8-4.8-.3 10.6-5.6 4-3.4 4.4-7.9 5.3 1.5 5.7-.9 5.8-5.6 3.2 4.1 12.2.8 6.4-1.8 11.3 1 6.3-1.4 7.6 1.3 8.7-4.6 5.8 7.2 10.1.6 5.9 4.3 7.7 5.5-2.5 9.6 6.4 5.4 8.7 19 6 6.9 7.5 8.3-5.1 11.9-7.6 48.4 26.5 48.7 26.5-.1-5.8h13.8l-1-27.7L593 162l-2.9-49.2-4.2-11.2 2.4-8.5-2.2-5.9 3.7-6.6z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="LS" fill={getPathFillColor("LS")} data-name="Lesotho" data-id="LS" d="m625.3 939.9 2.5-4.4 6.7-2.2 2.4-4.5 4.1-6.7-3.8-4.2-4.8-4.2-5.7 2.8-6.8 5.4-6.9 8.7 8 10.6 4.3-1.3z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="MA" fill={getPathFillColor("MA")} data-name="Morocco" data-id="MA" d="m271.2 30.7-5-.1-11.9-3.1-11 .9-6.8-5.9-8.5-.1-3.8 8.6-8 14.5-8.7 5.7-11.8 6.4-7.7 9.3-1.8 7.3-4.8 11.8 2.5 17.2-10.1 11.5-6 3.7-9.6 9.4-11 1.6-6.1 5.3-.2.2L133 149l-8.1 5.1-4.5 8.5-.5 7.4-3.4 8.1-4 2.2-6.9 8.8-4.4 9.8.7 4.6-4.1 7.3-4.7 3.7-.8 6.4.2.1 27-1.1 1.6-5 5-6.2 4.4-19.1 16.9-15 6-17.4 3.7-1.1 4.2-10.8 10-1.4 4.2 1.8h5.4l3.9-3.2 7.3-.4-.1-7.5h1.8l.2-16.3 19.2-10.2L225 106l9.6-3.7 4.6-7 13.8-5.4.6-10.2 6.7-1.2 5.4-5.1 15.2-2.3 2.2-5.4-3.1-2.9-3.9-14.7-.7-8.4-4.2-9z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="MG" fill={getPathFillColor("MG")} data-name="Madagascar" data-id="MG" d="m902.9 704.8-2.5-9.1-3-5.9-3.9-5.9-4.3 6.2-.7 8.3-7.1 9.6-5.1-1.7 1.3 6-4 6.9-10.4 8.5-7.3 7.9-5.4.2-4.6 2.5-6.9 2.8-6 .6-2.2 8.7-4.7 7.8.2 12.7 1.7 8.7 2.4 6.6-1.7 8.8-6.4 10.5-.3 4.6-5.7 2.4-2.8 10 .4 9.9 3.4 11-.1 12.3 2.6 7.3 9.1 5 6.5 3.5 10.9-5.8 9.9-3.3 6.8-16.1 6.1-19.2 9.3-26.2 7.3-19.1 5.9-16.1 1.6-11.7 3.5-3.2 1.5-5.9-1.7-10.2 2.6-4.1 3.5 8.1 2.4-4.1 1.7-6.6-2.8-6.5-1-16.7z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="ML" fill={getPathFillColor("ML")} data-name="Mali" data-id="ML" d="m347.4 252.3-13.3 1.3-.2-8.8-5.5-2.2-7.5-4-2.9-6.4-40.4-30.2-40-30.2-18.2.2 5.1 59.7 5.4 59.7 2 1.8-2.7 9.6-48.5.2-1.9 3.1-4.6-.9-6.9 2.7-8.4-3.8-3.8.3-2.2 8.2-4.1 2.5.4 8.6 2.3 7.9 4.5 3.9 1 5.3-.6 4.4.6 5h2l3.2-1.8 2 .4 3.3 3.5 5.2 1.1 3.3-3 4-1.8 2.9-1.9 2.4.3 2.7 3.1 1.4 3.8 5 5.8-2.5 3.5-.6 4.5 2.6-1.3 1.6 1.6-.7 4.1 3.7 4 1.6-1.3 3.3 2.1 9.4.1 2.3-4 2.1.3 3.5-1.6 1.8 5.9 2.9-1.7 5-2.1-.8-8 3.4-5.9-.3-4.7 9.7-11.4 1.8-9.5 3.4-3.4 5.8 1.9 5.1-2.8 1.7-3.6 9.4-6.2 2.3-4.3 11.3-5.8 6.7-1.9 3 2.6h7.8l7.7-.6 4.5-4.9 16.5-1.2 10.7-2.2 1-8.5 6.6-9.2-.3-31.9z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="MZ" fill={getPathFillColor("MZ")} data-name="Mozambique" data-id="MZ" d="m788.2 666.2-1.7-6.2-10 8.1-13.4 5.3-7.3-.2-4.5 4.2-8.4.3-3.3 1.8-14.4-3.9-4.7.5-3.3 13.1 1.4 15.8h.7l4.2 4.4 4.6 10 .3 17.8-5.4 3-4.1 9.6-7.5-8.6-.5-9.7 2.9-6.5-.5-5.5-4.7-3.5-3.3 1.2-6.8-6.6-37.1 11.4.8 9.9.6 5.1 10-.3 5.5 3 2.5 3.4 5.7 1 6.1 4.4-.8 17.5-2.8 9.6-1 10.4 1.7 4.1-1.7 8.1-1.9 1.3-3.6 9.9-13.4 15.7 4.7 19.5 2.5 9.9-3 15.4.7 5 1.3 6.2.6 6.1 9 .1 1.5-7.3-2.9-.9-.6-5.8 5.5-5.2 14.8-7.5 10.1-4.6 5.3-5 2.1-5.7-2.7-2.4 2.4-6.4 1.1-13.6-2.2.7.1-4.1-1.9-8.1-5.2-10.5 1.6-9.9 5.1-3.2 8.9-9.8 4.7-2.5 14.4-14.9 14-6.7 11.3-5.3 8.1-8.5 5.2-9.6 4.1-9.9-1.8-6.8.4-21.6-1-12.2.9-13.8z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="MR" fill={getPathFillColor("MR")} data-name="Mauritania" data-id="MR" d="m237.6 171.8-44.1-33.5-.5 20.9-38.9-.7-.4 35.4-11.2 1.3-3.1 7.1 1.9 20-46.9-.1-2.7 4.6 6.1 6 3 6.5-1.4 6.9 1.3 6.9 1 13.7-1.8 13-3.5 6.8.9 7.5 4.2-4.5 6 1.2 5.9-3 6.8-.1 5.7 4 7.9 3.7 7.2 10.2 7.8 9.5 4.1-2.5 2.2-8.2 3.8-.3 8.4 3.8 6.9-2.7 4.6.9 1.9-3.1 48.5-.2 2.7-9.6-2-1.8-5.4-59.7-5.1-59.7 18.2-.2z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="MW" fill={getPathFillColor("MW")} data-name="Malawi" data-id="MW" d="m714.6 711.7.3-5.2-2.7-4.1.4-6-3.3-10.2 3.7-7.7-.2-16.7-4.1-8.9.4-1.5-2.3-3.8-11.9-2.6 5.6 6.2 2.8 11.7-2.2 3.8-2.7 11.2 2 11.5-4 4.8-4.1 12.8 6.2 3.6 6.8 6.6 3.3-1.2 4.7 3.5.5 5.5-2.9 6.5.5 9.7 7.5 8.6 4.1-9.6 5.4-3-.3-17.8-4.6-10-4.2-4.4h-.7l.1 1.9 2.3.5 2.2 7.4-.4 1.7-4.1-5.3-2.2 3.4-1.9-2.9z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="NA" fill={getPathFillColor("NA")} data-name="Namibia" data-id="NA" d="m576 759.7-22.4 5.7-29.1-2-8.2-6.6-48.8.6-1.9 1-7.1-6.3-7.8-.4-7.2 2.3-5.9 2.7.6 10.6 9.5 13.5 2.5 8.7 6 16.6 5.9 11.4 4.6 5.7 1.3 7.6-.1 16.5 3.4 21.3 2.6 10.1 2.2 13.4 4.3 10.1 8.3 10.5 6-6.8 4.5 3.7 1.7 6 5.2 1 7.3 2.6 6.4-1 10.8-7.1 2.2-51.1 1.4-40.4 11.8-.5 1.9-49.3 9-.4 18.7-4.9 4.4 5.7 7.9-5.4h3.6l6.9-3.1v-1.2l-4.7-3.1-7.8-.8-9.9 3.1z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="NE" fill={getPathFillColor("NE")} data-name="Niger" data-id="NE" d="m458.3 198.6-19-6-40.5 26.4-34.5 27.1-16.9 6.2.3 31.9-6.6 9.2-1 8.5-10.7 2.2-16.5 1.2-4.5 4.9-7.7.6-1 6.7 1.6 6.3 6.9 9 .4 6.7 14 3.1-.3 9.5 4.1-4 4.3-.1 9.3 8 .8-12.4 3.5-5.5 1.6-8 3.2-3 13-1.6 12.2 5.1 4.6 5.3 6.1.2 5.8-3.4 14.7 7.1 6.2-.3 7.1-5.9 7.1.4 3.5-1.9 6.5.8 9.4 4 9.4-7.7 2.9.6 8.4 15.1 2.2-.3.4-4.4 3.4-.8 1.1-6.5-7.8-.3-.1-8.9-5.1-5.2 4.9-18.2 15.2-13 .2-18 4-28.1 2.5-6-5.1-4.7-.3-4.4-4.6-3.6-3.4-21.5-8.3 5.1-6.9-7.5z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="NG" fill={getPathFillColor("NG")} data-name="Nigeria" data-id="NG" d="m468.2 344.6-2.2.3-8.4-15.1-2.9-.6-9.4 7.7-9.4-4-6.5-.8-3.5 1.9-7.1-.4-7.1 5.9-6.2.3-14.7-7.1-5.8 3.4-6.1-.2-4.6-5.3-12.2-5.1-13 1.6-3.2 3-1.6 8-3.5 5.5-.8 12.4-.5 4.6 2.8 8.2-2.4 5.6 1.3 3.7-5.9 8.5-3.7 4.3-2.3 8.7.3 8.8-.6 22.3h10.7l9.2-.1 8.6 9.1 4.1 10 6.5 8.6 9.8.3 4.7-3.1 4.6.8 12.7-5 3.1-9.8 5.7-13.4 3.6-.1 7.2-8.1 4.6-.2 6.9 5.7 8.3-4.7 1.1-5.7 2.7-5.6 1.9-7 6.4-5.7 2.4-9.7 2.6-3.1 1.6-7.2 3.1-8.8 10.2-10.7.5-4.6 1.3-2.5-4.9-5.5z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="RW" fill={getPathFillColor("RW")} data-name="Rwanda" data-id="RW" d="m667.9 533-7.4 4.3-2.9-1.4-3.5 3.8-.5 8.3-1.7 1-1.2 7.6 7.4 1.1 3.8-7.9 6.5.9 3.5-1.8.8-8.1-4.8-7.8z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="EH" fill={getPathFillColor("EH")} data-name="W. Sahara" data-id="EH" d="M193.8 134.6H192l.1 7.5-7.3.4-3.9 3.2h-5.4l-4.2-1.8-10 1.4-4.2 10.8-3.7 1.1-6 17.4-16.9 15-4.4 19.1-5 6.2-1.6 5-27 1.1-.2-.1-.6 5.9 2.7-4.6 46.9.1-1.9-20 3.1-7.1 11.2-1.3.4-35.4 38.9.7.5-20.9.3-2.7v-1z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="SD" fill={getPathFillColor("SD")} data-name="Sudan" data-id="SD" d="m740 291.9.7-9.2 3.6-4.2 8.8-2.3 5.7-7.9-6.9-5.1-4.8-3.4-5.3-16.5-2.5-14.3 2.5-2.5-4.7-13.6H595.2l1 27.7h-13.8l.1 5.8 2.4 54.9-10.5-.9-5.2 10.2-3 8.5 2.6 3.2-3.8 4.3 1.5 5.7-3 5.8-1.2 5 4.3-.8 2.6 5.4.3 8 4.6 4.1-.1 3.4 1.5 5.9 7.2 8.6.1 5.7-1.9 5.7.9 4.3 4.2 4 1 .7 3.8-1.6 4.1-2.6 2.9-12.3 3.2-6.4 8.8-1.9 2.1 3.8 6.5 8 3.3 1.2 4.4-2.3 8.7.4 1.8 2.9h12.1l.3-2.9 6.3-2.6 1.1-4 4.6-2.9 10.4 8.1 6.2-1.4 5.8-10 6.5-7.6-1.3-8.3-3-4 7.3-.8.7-3 5.7.9-1.2 10.2 1.7 10 6.5 5.5 1.5 4.7v6.9l1.7.3-.1-1.7 3.3-14.5 5.6-3.8 1.1-5.7 4.8-10.6 7.1-6.8 4.5-13.6 1.4-11.9-1.5-5.6 4.3-20.3z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="SS" fill={getPathFillColor("SS")} data-name="S. Sudan" data-id="SS" d="m707.8 379.2-1.5-4.7-6.5-5.5-1.7-10 1.2-10.2-5.7-.9-.7 3-7.3.8 3 4 1.3 8.3-6.5 7.6-5.8 10-6.2 1.4-10.4-8.1-4.6 2.9-1.1 4-6.3 2.6-.3 2.9h-12.1l-1.8-2.9-8.7-.4-4.4 2.3-3.3-1.2-6.5-8-2.1-3.8-8.8 1.9-3.2 6.4-2.9 12.3-4.1 2.6-3.8 1.6 8.4 5.4 6.8 5.5.1 4.5 8.3 7.2 5.2 6 3.2 8.3 9.2 5.5 2 4.4 7.5 11.4 5.5 1.7 3.2-2.3 5.7.9 6.8-2.9 2.9 5.9 10.9 9.2 5-3.8 7.8 3.1 9.8-3.3 8.6.1 7.4-6.4 7.4-8.3 8.1-9.1-7.4-15-5.7-3.2-2.2-5.6-6.3-6.7-7.5-1 4-7.9 6.4-.3 1.8-4.2-.4-10.8-1.7-.3v-6.9z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="SN" fill={getPathFillColor("SN")} data-name="Senegal" data-id="SN" d="m148.8 315.1-7.8-9.5-7.2-10.2-7.9-3.7-5.7-4-6.8.1-5.9 3-6-1.2-4.2 4.5-3 7.1-6.1 9.7-5.4 2.6 6 4.9 4.8 10.8 13.2-.4 2.8-3.3 3.8-.2 4.7 3.4 3.8.1 4-2.3 2.4 4-5.3 3.1-5.2-.3-5.2-2.9-4.5 3.2-2.2.1-3 1.9-11-.2 1.8 10.6 6.5-2.3 4 .5 3.3-1.6 22.4.6 5.8.1 8.7 3.4 2.7-.3.9-1.6 6.6 1.1 1.8-.7.6-4.4-1-5.3-4.5-3.9-2.3-7.9-.4-8.6z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="SL" fill={getPathFillColor("SL")} data-name="Sierra Leone" data-id="SL" d="m171.5 401-3.3.8.1-5.1-1.9-3.6.4-4-2.6-5.8-3.3-5h-9.7l-2.9 2.6-3.3.3-2.1 3-1.5 3.8-6.5 6.1 1.4 10.3 2.1 5 6.3 7.4 8.7 5.6 3.3 1 2.9-4.4.7-4 5.5-7.5 5.7-6.5z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="SZ" fill={getPathFillColor("SZ")} data-name="Swaziland" data-id="SZ" d="m674 874.9-5.8-2.6-3.5 1-1.4 4-3.6 5.2-.2 4.8 6.6 7.5 7-1.5 2.8-6.1-.6-6.1-1.3-6.2z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="TD" fill={getPathFillColor("TD")} data-name="Chad" data-id="TD" d="m582.5 246.4-48.7-26.5-48.4-26.5-11.9 7.6 3.4 21.5 4.6 3.6.3 4.4 5.1 4.7-2.5 6-4 28.1-.2 18-15.2 13-4.9 18.2 5.1 5.2.1 8.9 7.8.3-1.1 6.5 4.9 8.9 1 9.1-.4 9.2 6.8 12.6-6.8-.1-3.4.9-5.6-1.3-2.5 6.5 7.2 8.1 5.3 2.3 1.8 5.7 3.9 9.6-1.8 3.7 10-1 2.2-3.6 2.1.3 3 3.1 15.3-5.3 5.1-5.4 6.3-4.8-1.2-4.9 3.4-1.2 11.8.8 11.3-6.4 8.6-15.1 6-5.6 7.7-2.3.1-3.4-4.6-4.1-.3-8-2.6-5.4-4.3.8 1.2-5 3-5.8-1.5-5.7 3.8-4.3-2.6-3.2 3-8.5 5.2-10.2 10.5.9-2.4-54.9z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="TG" fill={getPathFillColor("TG")} data-name="Togo" data-id="TG" d="m307.1 365.2-10.7-.3-.9 4.3 5.1 7.1v10.1l1.2 10.9 3 5-2.7 12.5 1 6.8 3.2 8.8 2.8 4.9 9.8-3-3-9.5.5-31.8-2.5-2.8-.4-6.8-4.3-4.9-3.7-4.1 1.6-7.2z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="TN" fill={getPathFillColor("TN")} data-name="Tunisia" data-id="TN" d="m429.5 59-4.5-2.2-3.2-6.6-6-.2-2.4-7.6 7.3-7 1.1-12.1-4.1-3.5-.2-6.5 5.5-7-.9-2.7-9.5 5.2.1-7.1-8.1-1.7-12.2 5.7-2.2 7.2 2.3 13.4-2.4 11.6-7 7.8 1.3 10.4 9.7 8.3.2 3.3 7.3 5.6 5.7 24.7 5.6-3.2.9-5.8-1.5-5.7 7.9-5.3 3.4-4.4 5.6-4 .3-10.6z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="TZ" fill={getPathFillColor("TZ")} data-name="Tanzania" data-id="TZ" d="m672.2 531.3-4.3 1.7 4.8 7.8-.8 8.1-3.5 1.8.6 5.4 2.6 3.2.1 4.5-3 2.9-4.9 7.2-4.5 5-1.2.2-.7 5.9 2.3 2-.5 5.9 2.3 5.5-2.9 5.3 9.7 9.4.8 8.5 5.9 14.2.6.4 4.8 2.3 7.7 2.4 6.8 4.1 11.9 2.6 2.3 3.8.8-2.7 6.2 7.4.6 14.5 3.9 5.3-.1.2 4.7-.5 14.4 3.9 3.3-1.8 8.4-.3 4.5-4.2 7.3.2 13.4-5.3 10-8.1-4.4-3-4.7-13.6-4-8.7 1-6.6-.6-4.2 3.5-8.4-.3-3.6-7.7-5-.6-7.8 5.9-17.1-17.3-13.8-.7-8-44.1-28.2-6 6.1-4.1 6.3 4.8 4.7-7 3.4-1.5-1.6-7.1.9-5.5 3.1-3.3-5.4 2.3-9.7.5-8.3-13.4-.2z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="UG" fill={getPathFillColor("UG")} data-name="Uganda" data-id="UG" d="m711.3 458.5-7.4 6.4-8.6-.1-9.8 3.3-7.8-3.1-5 3.8-.6 16.1 4.9 1.9-3.9 4.9-4.7 3.7-4.6 7.2-2.6 6.4-.6 11.1-2.9 5.3-.1 10.5 2.9 1.4 7.4-4.3 4.3-1.7 13.4.2-.7-5.3 5.7-8.1 7.7-2 5.2-3.3 6.3 2.7.6 1v-.7l3.5-5.6 5.9-9.2 4.4-10.1-5.5-15.8-1.5-7-5.9-9.6z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="ZA" fill={getPathFillColor("ZA")} data-name="South Africa" data-id="ZA" d="m522.3 999 5.3-.3 7.5-5.3 10-2.2 12.3-5.5 4.7.7 7.2-1.7 12.3 2.7 5.9-2.6 6.9 2 1.8-3.8 6-.8 12.6-5.3 9.3-6.3 8.9-8.3 14.4-14.2 7.5-9.9 3.9-7.1 5.5-7 2.5-2 8.6-7 3.5-6.2 2.3-11.5 3.7-10.1-9-.1-2.8 6.1-7 1.5-6.6-7.5.2-4.8 3.6-5.2 1.4-4 3.5-1 5.8 2.6-.7-5 3-15.4-2.5-9.9-4.7-19.5-6.3-1.3-4.1 1.6-5.7-2.3-4.9-.2-17.3 10.2-11.2 10.3-4.4 9.3-3.9 5.2-6.5 1.1-2.4 6.6-1.4 4.3-7.8 3.2-9.6-.6-5.5-3.9-4.9-1.7-6 3.2-3.2 6.6-5.8 4.2-6.2 6.2-8.5 1.4-2.5-4.9 1.5-8.4L536 862l-3.2-2-2.2 51.1-10.8 7.1-6.4 1-7.3-2.6-5.2-1-1.7-6-4.5-3.7-6 6.8 7.7 17.9v.1l5.4 11.7 6.9 12.8-.2 10.6-3.9 2.5 3.2 9.3-.5 8.1 1.3 3.8.7-1.9 4.6 6.2 3.8.2 4.6 5zm103-59.1-4.3 1.3-8-10.6 6.9-8.7 6.8-5.4 5.7-2.8 4.8 4.2 3.8 4.2-4.1 6.7-2.4 4.5-6.7 2.2-2.5 4.4z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="ZM" fill={getPathFillColor("ZM")} data-name="Zambia" data-id="ZM" d="m671.3 636-4.1-1.1.7-3-2.1-.6-16.4 2.3-3.3 1.7-3.6 8.8 2.6 6.1-2.5 16.4-1.9 13.9 3.2 2.4 8.4 5.4 3.4-2.5.6 14.9-9.3-.1-4.8-7.6-4.3-5.9-9.2-1.9-2.6-7.3-7.5 4.4-9.7-2-3.9-6.2-7.7-1.3-5.7.3-.6-4.3-4.2-.3 1.2 4.3-1.5 6.7 2 6.5-2 5.2 1 4.7-25.3-.1-1.6 44 7.8 11.3 7.6 8.6 9.9-3.1 7.8.8 4.7 3.1v1.2l2.2 1 13.4 1.5 3.8 1.6 4.1-.3 7-9 10.9-11.4 4.4-1 1.7-4.8 7-5.5 9.3-1.9-.8-9.9 37.1-11.4-6.2-3.6 4.1-12.8 4-4.8-2-11.5 2.7-11.2 2.2-3.8-2.8-11.7-5.6-6.2-6.8-4.1-7.7-2.4-4.8-2.3-.6-.4.9 2.3-2 .8-2.6-2.9z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="ZW" fill={getPathFillColor("ZW")} data-name="Zimbabwe" data-id="ZW" d="m669.1 825.1 13.4-15.7 3.6-9.9 1.9-1.3 1.7-8.1-1.7-4.1 1-10.4 2.8-9.6.8-17.5-6.1-4.4-5.7-1-2.5-3.4-5.5-3-10 .3-.6-5.1-9.3 1.9-7 5.5-1.7 4.8-4.4 1-10.9 11.4-7 9-4.1.3-3.8-1.6-13.4-1.5 4.2 11.1 2.3 2.4 3.5 8 13 15.2 5.1 1.5-.2 4.9 3.1 8.8 9.2 2.1 7.3 6.2 4.9.2 5.7 2.3 4.1-1.6 6.3 1.3z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />

                    <path id="SO" fill={getPathFillColor("SO")} data-name="Somalia" data-id="SO" d="m832.6 372.8-5.7-5.8-2.5-5.7-4.1-2.6-4.2 7.4-2.5 4.9 4.8 7.7 4.6 6.6 4.8 5 40.3 16.4 10.3-.1-33.5 41.5-15.9.6-10.7 9.8-7.8.2-3.3 4.4-10.5 15.7.4 50.4 7.2 11.4 2.7-3.3 2.9-7.3 13.4-16.7 11.4-10.6 18.1-13.7 12.1-11.2 14.1-18.9 10.1-15.5 10-20.2 7-17.7 5.4-15.5 2.9-14.9 2.4-5-.4-7.3.8-8-.5-3.9-4.6.1-5.5 4.7-6.4 1.4-5.5 2.1-3.9.2-6.9.5-4.2 2.6-6 .9-10.5 4.3-13.2 1.6-11.3 3.5h-6.1z" stroke="#ffffff" onMouseEnter={handlePathHover} onMouseLeave={handleMouseLeave} />
                </svg>
            </div>
            {infoData && (
                <div id="info-div" className='info_div'>
                    <div className='key'>
                        <div className='draft key_element'>
                            <div className='green cube'></div>
                            <p>Legistlation</p>
                        </div>
                        <div className='legistlation key_element'>
                            <div className='amber cube'></div>
                            <p>Draft</p>
                        </div>
                        <div className='no_law key_element'>
                            <div className='red cube'></div>
                            <p>No law</p>
                        </div>
                        <div className='no_data key_element'>
                            <div className='black cube'></div>
                            <p>No Data</p>
                        </div>
                    </div>
                    <div className='info_content cname'>
                        <div className='country-name'>
                            <h2>{infoData.country_name}</h2>
                        </div>
                    </div>
                    <div className='info_content'>
                        <div>
                            <p>Law:</p>
                            {infoData.law}
                        </div>
                    </div>
                    <div className='info_content'>
                        <div>
                            <p>Authority:</p>
                            {infoData.authority}
                        </div>
                    </div>


                    <div className='info_content flag'>
                        <div>
                            <p>Penalties & Fines:</p>
                            <span>{infoData.penalties}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};



export default ResponsiveMap;