import { Counter } from "./Counter";
import { RepositoryItem } from "./RepositoryItem";
import '../style/repositories.scss'
import { useState, useEffect } from "react";


export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/g-ars/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <div>
                <ul>
                    {repositories.map(repository => {
                        return <RepositoryItem key={repository.name} repository={repository} />
                    })}
                </ul>
            </div>
        </section>
    )
}