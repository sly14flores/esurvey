<?php

namespace App\Exports;

use App\Survey;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;

use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\Exportable;

class SurveyReport implements FromArray, WithHeadings, ShouldAutoSize, WithStyles, WithEvents
{
	
    use Exportable;	
	
	private $columns;
	private $rows;

	public function __construct($columns,$rows)
	{
		$this->columns = $columns;
		$this->rows = $rows;
	}

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
                // $event->sheet->getDelegate()->getStyle($cellRange)->getFont()->setSize(14);
                // $event->sheet->getStyle($cellRange)->ApplyFromArray($styleArray);
                // $event->sheet->getStyle('A9:G9')->ApplyFromArray($styleArray);
                // $event->sheet->getStyle('A12:G12')->ApplyFromArray($styleArray);
                // $event->sheet->getStyle('A19:G19')->ApplyFromArray($styleArray);
                // $event->sheet->getStyle('A27:G27')->ApplyFromArray($styleArray);
                // $event->sheet->getStyle('A31:G31')->ApplyFromArray($styleArray);
                // $event->sheet->getStyle('A35:G35')->ApplyFromArray($styleArray);
                // $event->sheet->getStyle('A36:G36')->ApplyFromArray($styleArray);
                // $event->sheet->getStyle('A42:G42')->ApplyFromArray($styleArray);
                // $event->sheet->getStyle('A43:G43')->ApplyFromArray($styleArray);
            },
        ];        

    }   

    public function headings(): array
    {

		$headers = [];
		
		foreach ($this->columns as $column) {
			$headers[] = $column['value'];
		}
	
		return $headers;
		
    }
	
    public function array(): array
    {

		$responses = [];

		foreach ($this->rows as $row) {

			$response = [];

			foreach ($row as $cell) {
				$response[] = $cell['value'];
			}

			$responses[] = $response;

		}

        return $responses;

    }

}