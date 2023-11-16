"use client"
import type { Category } from "@/types";
import Link from "next/link";
import {useState} from "react"

function CategoryItem ({
        category,
        categories, 
    }: {
        category: Category; 
        categories: Category[], 
    }) {

    const [expanded, setExpanded]= useState(false)

    const handleClick = () => setExpanded((value) => !value);
    const hasSubCategories = categories.filter(({parentId}) => category.id === parentId).length;

    return (
        <li className="ml-2" key={category.id}>
            {
                hasSubCategories ? ( 
                <button
                    className="text-white mr-1"
                    type="button"
                    onClick={handleClick}
                >{expanded ? "-":"+"}</button>)
                : null
            }

            <Link href ={`/${category.id}`}>
                {category.name}
            </Link>
            {expanded ? (
                <ListOfCategories categories={categories} parentCategory={category.id} />
            ) : null}
        </li>
    )
}

export function ListOfCategories({ categories, parentCategory = null }: {categories: Category[], parentCategory?: string | null}) {
    
    const categoriesToRender = categories.filter(({parentId, id}) => {
      return parentCategory === parentId
    });

    return (
      <ul>
        {categoriesToRender.map((category) => (
            <CategoryItem
                key = {category.id}
                categories = { categories}
                category = {category}
            />
         ))
        }
      </ul>
    );
  }