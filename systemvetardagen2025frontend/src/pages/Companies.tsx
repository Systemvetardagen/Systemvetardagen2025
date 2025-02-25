import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import {
    candidatePrograms,
    masterPrograms,
    positions,
    Company,
} from '../assets/companies';
import companiesData from '../assets/companies.json';
import { useTranslation } from 'react-i18next';
import FadeInSection from '../components/FadeInSection/FadeInSection';
import { Link } from 'react-router-dom';

const Companies: React.FC = () => {
    const companies: Company[] = companiesData;
    const [t] = useTranslation('companies');
    const [selectedFilters, setSelectedFilters] = useState<{
        [key: string]: Set<string>;
    }>({
        candidatePrograms: new Set(),
        masterPrograms: new Set(),
        positions: new Set(),
    });

    const [searchTerm, setSearchTerm] = useState<string>('');

    const [programsExpanded, setProgramsExpanded] = useState<boolean>(false);
    const [positionsExpanded, setPositionsExpanded] = useState<boolean>(false);

    const programsRef = useRef<HTMLDivElement>(null);
    const positionsRef = useRef<HTMLDivElement>(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                programsExpanded &&
                programsRef.current &&
                !programsRef.current.contains(e.target as Node)
            ) {
                setProgramsExpanded(false);
            }
            if (
                positionsExpanded &&
                positionsRef.current &&
                !positionsRef.current.contains(e.target as Node)
            ) {
                setPositionsExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [programsExpanded, positionsExpanded]);

    const toggleFilter = (filterType: string, filterValue: string) => {
        setSelectedFilters((prevFilters) => {
            const updatedFilters = new Set(prevFilters[filterType]);
            if (updatedFilters.has(filterValue)) {
                updatedFilters.delete(filterValue);
            } else {
                updatedFilters.add(filterValue);
            }
            return { ...prevFilters, [filterType]: updatedFilters };
        });
    };

    const clearFilters = () => {
        setSelectedFilters({
            candidatePrograms: new Set(),
            masterPrograms: new Set(),
            positions: new Set(),
        });
    };

    const getLabel = (
        set: Set<string>,
        type: 'programs' | 'positions'
    ): string => {
        const size = set.size;

        if (size === 0) return `${t('global.all')} ${t(`global.${type}`)}`;
        if (size === 1) return t(`${type}.${Array.from(set)[0]}`);

        return `${size} ${t(`global.${type}`)}`;
    };

    const filteredCompanies = companies.filter((company: Company) => {
        // Search filter
        const matchesSearch =
            searchTerm === '' ||
            company.name.toLowerCase().includes(searchTerm.toLowerCase());

        const isFilterEmpty =
            selectedFilters.candidatePrograms.size === 0 &&
            selectedFilters.masterPrograms.size === 0 &&
            selectedFilters.positions.size === 0;

        if (isFilterEmpty && matchesSearch) {
            return true;
        }

        const hasCandidateFilters = selectedFilters.candidatePrograms.size > 0;
        const matchesCandidateProgram =
            !hasCandidateFilters ||
            (company.candidatePrograms &&
                company.candidatePrograms.some((program: string) =>
                    selectedFilters.candidatePrograms.has(program)
                ));

        const hasMasterFilters = selectedFilters.masterPrograms.size > 0;
        const matchesMasterProgram =
            !hasMasterFilters ||
            (company.masterPrograms &&
                company.masterPrograms.some((program: string) =>
                    selectedFilters.masterPrograms.has(program)
                ));

        const hasPositionFilters = selectedFilters.positions.size > 0;
        const matchesPosition =
            !hasPositionFilters ||
            (company.positions &&
                company.positions.some((position: string) =>
                    selectedFilters.positions.has(position)
                ));

        return (
            matchesSearch &&
            matchesCandidateProgram &&
            matchesMasterProgram &&
            matchesPosition
        );
    });

    const CompanyCard: React.FC<{ company: Company; className: string }> = ({
        company,
        className,
    }) => {
        const logoPath = `/companies/${company.id}/logo.webp`;
        return (
            <div className="bg-white rounded-3xl hover:scale-105 transition-transform duration-100 shadow-xl p-4">
                <Link className="" to={`/companies/${company.id}`}>
                    <img
                        src={logoPath}
                        className={`object-contain ${className}`}
                        alt={`${company.name} logo`}
                    />
                </Link>
            </div>
        );
    };

    const noFiltersSelected =
        Object.values(selectedFilters).every(
            (filterSet) => filterSet.size === 0
        ) && searchTerm === '';
    const partners = companies.filter((company) => company.isPartner);
    return (
        <div className="bg-background min-h-screen">
            <div className="flex flex-col items-center py-32 px-10">
                <h1 className="text-5xl lg:text-6xl mb-8">
                    {t('global.header')}
                </h1>
                <div className="relative">
                    <div className="flex items-center flex-wrap justify-center gap-2 mb-4">
                        <h1 className="font-light text-gray-700">
                            {t('global.showing')}
                        </h1>
                        <div className="">
                            <button
                                onMouseDown={(e) => e.stopPropagation()}
                                onClick={() => {
                                    setProgramsExpanded(!programsExpanded);
                                    setPositionsExpanded(false);
                                }}
                                className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md hover:opacity-90 transition-opacity"
                            >
                                <p className="">
                                    {getLabel(
                                        new Set<string>([
                                            ...selectedFilters.candidatePrograms,
                                            ...selectedFilters.masterPrograms,
                                        ]),
                                        'programs'
                                    )}
                                </p>
                                <ChevronDown
                                    className={`transform transition-transform duration-200 ${
                                        programsExpanded ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                        </div>
                        <h1 className="font-light text-gray-700">
                            {t('global.and')}
                        </h1>
                        <div className="">
                            <button
                                onMouseDown={(e) => e.stopPropagation()}
                                onClick={() => {
                                    setPositionsExpanded(!positionsExpanded);
                                    setProgramsExpanded(false);
                                }}
                                className="flex items-center gap-2 px-4 py-2 bg-accent rounded-md hover:opacity-90 transition-opacity"
                            >
                                {getLabel(
                                    selectedFilters.positions,
                                    'positions'
                                )}
                                <ChevronDown
                                    className={`transform transition-transform duration-200 ${
                                        positionsExpanded ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            <div
                                className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ease-in-out ${
                                    positionsExpanded
                                        ? 'max-h-[1000px] opacity-100'
                                        : 'max-h-0 opacity-0 overflow-hidden'
                                }`}
                            ></div>
                        </div>
                    </div>
                    <div className="w-full mb-4">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder={t('global.searchPlaceholder')}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <button
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    onClick={() => setSearchTerm('')}
                                    aria-label={
                                        t('search.clearSearch') ||
                                        'Clear search'
                                    }
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="relative">
                        {programsExpanded && (
                            <FadeInSection direction="fadeDown">
                                <div
                                    ref={programsRef}
                                    className="absolute bg-white rounded-xl flex flex-col shadow-md p-4 left-1/2 -translate-x-1/2 w-full max-w-[550px] gap-2"
                                >
                                    <h1>Bachelor&apos;s programmes</h1>
                                    {candidatePrograms.map((program) => (
                                        <label
                                            key={program}
                                            className="font-light text-gray-700"
                                        >
                                            <input
                                                type="checkbox"
                                                value={program}
                                                checked={selectedFilters.candidatePrograms.has(
                                                    program
                                                )}
                                                onChange={() =>
                                                    toggleFilter(
                                                        'candidatePrograms',
                                                        program
                                                    )
                                                }
                                                className="mr-2"
                                            />
                                            {t(`programs.${program}`)}
                                        </label>
                                    ))}
                                    <h1>Master&apos;s programmes</h1>
                                    {masterPrograms.map((program) => (
                                        <label
                                            key={program}
                                            className="font-light text-gray-700"
                                        >
                                            <input
                                                type="checkbox"
                                                value={program}
                                                checked={selectedFilters.masterPrograms.has(
                                                    program
                                                )}
                                                onChange={() =>
                                                    toggleFilter(
                                                        'masterPrograms',
                                                        program
                                                    )
                                                }
                                                className="mr-2"
                                            />
                                            {t(`programs.${program}`)}
                                        </label>
                                    ))}
                                    <button
                                        onClick={clearFilters}
                                        className="flex items-center gap-2 px-4 py-2 bg-link text-white rounded-xl mt-2 hover:opacity-90 transition-opacity"
                                    >
                                        {t('global.clearFilters')}
                                    </button>
                                </div>
                            </FadeInSection>
                        )}
                    </div>
                    <div className="relative">
                        {positionsExpanded && (
                            <FadeInSection direction="fadeDown">
                                <div
                                    ref={positionsRef}
                                    className="absolute bg-white rounded-xl flex flex-col right-0 shadow-md p-4 gap-2"
                                >
                                    {positions.map((position) => (
                                        <label
                                            key={position}
                                            className="font-light text-gray-700"
                                        >
                                            <input
                                                type="checkbox"
                                                value={position}
                                                checked={selectedFilters.positions.has(
                                                    position
                                                )}
                                                onChange={() =>
                                                    toggleFilter(
                                                        'positions',
                                                        position
                                                    )
                                                }
                                                className="mr-2"
                                            />
                                            {t(`positions.${position}`)}
                                        </label>
                                    ))}
                                    <button
                                        onClick={clearFilters}
                                        className="flex items-center gap-2 px-4 py-2 bg-link text-white rounded-xl mt-2 hover:opacity-90 transition-opacity"
                                    >
                                        {t('global.clearFilters')}
                                    </button>
                                </div>
                            </FadeInSection>
                        )}
                    </div>
                </div>
                {noFiltersSelected ? (
                    <div>
                        <h1 className="text-2xl mb-8 text-center text-gray-700 font-light">
                            {t('global.partners')}
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grd-flow-row gap-6">
                            {partners.map((partner, index) => (
                                <CompanyCard
                                    company={partner}
                                    key={index}
                                    className="h-44 w-[308px]"
                                />
                            ))}
                        </div>
                        <div className="w-full h-1 my-10 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                    </div>
                ) : (
                    <button
                        onClick={clearFilters}
                        className="flex items-center gap-2 px-4 py-2 bg-link text-white rounded-md hover:opacity-90 transition-opacity mb-8"
                    >
                        {t('global.clearFilters')}
                    </button>
                )}
                <h1 className="text-2xl mb-8 text-center text-gray-700 font-light">
                    {t('global.allCompanies')}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-6">
                    {filteredCompanies.map((company, index) => (
                        <FadeInSection key={index} direction="fadeLeft">
                            <CompanyCard
                                company={company}
                                className="h-32 w-56"
                            />
                        </FadeInSection>
                    ))}
                    <FadeInSection direction="fadeLeft">
                        <div className="bg-white rounded-3xl hover:scale-105 transition-transform duration-100 shadow-xl p-4 text-center text-2xl">
                            <div className="h-32 w-56 flex justify-center flex-col">
                                <p>More companies</p>
                                <p>coming!</p>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </div>
    );
};

export default Companies;
