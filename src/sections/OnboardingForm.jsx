"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const languages = ["English", "Hindi", "Marathi", "Tamil"];

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.string().required("Category is required"),
  languages: yup
    .array()
    .min(1, "Select at least one language")
    .required("Languages are required"),
  fee: yup.string().required("Fee rang is required"),
  location: yup.string().required("Location is required"),
  imageUrl: yup.string().url("Enter a valid image url").notRequired(),
});

function OnboardingForm() {
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Submitted Data: ", data);
    alert("Form submitted on console.");
  };

  const handleCheckboxChange = (filed, value) => {
    const current = watch(filed) || [];

    if (current.includes(value)) {
      setValue(
        filed,
        current.filter((v) => v !== value)
      );
    } else {
      setValue(filed, [...current, value]);
    }
  };

  return (
    <section className='form-section'>
      <h1 className='heading-xl text-center mb-4'>Onboarding Form</h1>

      <p className='subtext-base text-center max-w-lg mx-auto'>
        Filed out your artist profile so event organizers can discover and book
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        {/* Name */}
        <div className='form-group'>
          <Label>Name</Label>
          <Input {...register("name")} placeholder='Artist name' />

          {errors.name && <p className='form-error'>{errors.name.message}</p>}
        </div>

        {/* Bio */}
        <div className='form-group'>
          <Label>Bio</Label>
          <Textarea {...register("bio")} placeholder='Short artist bio...' />

          {errors.bio && <p className='form-error'>{errors.bio.message}</p>}
        </div>

        {/* category */}
        <div className='form-group'>
          <Label>Category</Label>
          <Select
            onValueChange={(val) => setValue("category", val)}
            value={watch("category" || "")}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Select a category' />

              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectTrigger>
          </Select>

          {errors.category && (
            <p className='form-error'>{errors.category.message}</p>
          )}
        </div>

        {/* languages */}
        <div className='form-group'>
          <Label>Languages Spoken</Label>
          <div className='form-grid mt-2'>
            {languages.map((lang) => (
              <label key={lang} className='form-checkbox-tile'>
                {
                  <Checkbox
                    checked={watch("languages")?.includes(lang) || false}
                    onCheckedChange={() =>
                      handleCheckboxChange("languages", lang)
                    }></Checkbox>
                }

                <span>{lang}</span>
              </label>
            ))}
          </div>

          {errors.languages && (
            <p className='form-error'>{errors.languages.message}</p>
          )}
        </div>

        {/* Fee */}
        <div className='form-group'>
          <Label>Fee Range</Label>
          <Select
            onValueChange={(val) => setValue("fee", val)}
            value={watch("fee") || ""}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Select Fee Range' />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='0-10k'>₹0 - ₹10,000</SelectItem>
              <SelectItem value='10k-50k'>₹10,000 - ₹50,000</SelectItem>
              <SelectItem value='50k-1L'>₹50,000 - ₹1,00,000</SelectItem>
              <SelectItem value='1L+'>₹1,00,000+</SelectItem>
            </SelectContent>
          </Select>

          {errors.fee && <p className='form-error'>{errors.fee.message}</p>}
        </div>

        {/* Location */}
        <div className='form-group'>
          <Label>Location</Label>
          <Input {...register("location")} placeholder='City, State' />

          {errors.location && (
            <p className='form-error'>{errors.location.message}</p>
          )}
        </div>

        {/* Profile img input */}
        <div className='form-group'>
          <Label>Profile Image (optional)</Label>

          <Input
            {...register("imageUrl")}
            placeholder='https://example.com/image.jpg'
            onChange={(e) => setImagePreview(e.target.value)}
          />

          {errors.imageUrl && (
            <p className='form-error'> {errors.imageUrl.message}</p>
          )}

          {imagePreview && (
            <img
              src={imagePreview}
              alt='Preview'
              className={`form-preview-img`}
            />
          )}
        </div>

        <Button type='submit' className='form-submit-btn'>
          Submit Artist Profile
        </Button>
      </form>
    </section>
  );
}

export default OnboardingForm;
