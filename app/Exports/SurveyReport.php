<?php

namespace App\Exports;

use App\Survey;

use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;

use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;

class SurveyReport implements FromQuery, WithMapping, WithHeadings, ShouldAutoSize, WithStyles, WithEvents
{

    public function styles(Worksheet $sheet)
    {

    }

    public function registerEvents(): array
    {

        $styleArray = [
            'font' => [
                'bold' => true,
            ]
        ];

        return [
            AfterSheet::class    => function(AfterSheet $event) use ($styleArray)
            {
                $cellRange = 'A1:G1'; // All headers
                //$event->sheet->getDelegate()->getStyle($cellRange)->getFont()->setName('Calibri');
                $event->sheet->getDelegate()->getStyle($cellRange)->getFont()->setSize(14);
                $event->sheet->getStyle($cellRange)->ApplyFromArray($styleArray);
                $event->sheet->getStyle('A9:G9')->ApplyFromArray($styleArray);
                $event->sheet->getStyle('A12:G12')->ApplyFromArray($styleArray);
                $event->sheet->getStyle('A19:G19')->ApplyFromArray($styleArray);
                $event->sheet->getStyle('A27:G27')->ApplyFromArray($styleArray);
                $event->sheet->getStyle('A31:G31')->ApplyFromArray($styleArray);
                $event->sheet->getStyle('A35:G35')->ApplyFromArray($styleArray);
                $event->sheet->getStyle('A36:G36')->ApplyFromArray($styleArray);
                $event->sheet->getStyle('A42:G42')->ApplyFromArray($styleArray);
                $event->sheet->getStyle('A43:G43')->ApplyFromArray($styleArray);
            },
        ];        

    }

    public function query()
    {
        return Survey::query();
    }    

    public function headings(): array
    {
        return [
            'Id',
            'Name',
            'Date',
        ];
    }    

    public function map($survey): array
    {
        return [
            [$survey->id,$survey->name,$survey->created_at], 
        ];
    }

}