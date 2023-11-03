'use client'

import React, { useState, useEffect } from "react"
const getTopics = async () => {
    const apiUrl = process.env.API_URL;

    try {
        const res = await fetch(`/api/pupils`, {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Mavzular yuklanmadi');
        }

        return res.json();
    } catch (error) {
        console.log('Mavzular yuklanishda xatolik: ', error);
        return { mavzula: [] };
    }
};

export default function FilterOption({ shaxsiy, setShaxsiy }) {
    const [mavzula, setMavzula] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const topics = await getTopics();
                setMavzula(topics.mavzula);
            } catch (error) {
                console.log('Mavzular yuklanishda xatolik: ', error);
            }
        };

        fetchData();
    }, []);

    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setShaxsiy(e.target.value);
    };

    useEffect(() => {
        const fetchTopics = async () => {
            const { mavzula } = await getTopics();
            setMavzula(mavzula);
        };

        fetchTopics();
    }, []);

    return (
        <div>
            <div className="flex gap-4">
                <select className="w-full p-3" value={selectedOption} onChange={handleOptionChange}>
                    <option>Tanlang</option>
                    {mavzula.map((mavzu, index) => (
                        <option key={index} value={mavzu.shaxs}>{mavzu.shaxs}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}